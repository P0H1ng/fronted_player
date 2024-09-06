<template>
    <div>
        <!-- 靶機資訊 -->
        <div v-if="gameBoxes !== null">
            <v-list-item v-for="gameBox in gameBoxes" :key="gameBox.ID" @click="showDialog(gameBox)">
                <v-list-item-content>
                    <v-list-item-title v-text="gameBox.Title"/>
                    <v-list-item-subtitle>{{gameBox.IP}}:{{gameBox.Port}}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{utils.FormatFloat(gameBox.Score)}} {{$t('general.score')}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <div v-if="!gameBox.IsAttacked && !gameBox.IsDown">
                        <v-chip class="ma-2" color="green" text-color="green" outlined>Online</v-chip>
                    </div>
                    <div v-if="gameBox.IsDown">
                        <v-chip class="ma-2" color="orange" text-color="orange" outlined>Down</v-chip>
                    </div>
                    <div v-if="gameBox.IsAttacked">
                        <v-chip class="ma-2" color="red" text-color="red" outlined>Attacked</v-chip>
                    </div>
                </v-list-item-action>
            </v-list-item>
        </div>
        <v-list-item v-if="gameBoxes === null || gameBoxes.length === 0">
            <p>{{$t('gamebox.empty')}}</p>
        </v-list-item>

        <!-- 靶機詳細資訊 -->
        <v-dialog v-model="dialogVisible" persistent width="500">
            <v-card>
                <v-card-title class="headline" primary-title>
                    {{ gameBoxDetail.Title }}
                </v-card-title>
                <v-card-text v-if="$activeDialogId === gameBoxDetail.ChallengeID">
                    <p><b>{{gameBoxDetail.IP}}:{{gameBoxDetail.Port}}</b></p>
                    <v-textarea filled auto-grow rows="4" shaped :disabled="true"
                                v-model="gameBoxDetail.Description"></v-textarea>
                </v-card-text>
                <v-divider/>
                <v-card-actions>
                    <v-btn color="primary" text @click="activateBox(gameBoxDetail.ChallengeID)">{{$t('general.start')}}</v-btn>
                    <v-spacer/>
                    <v-btn color="primary" text @click="closeDialog">{{$t('general.close')}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    name: "GameBox",
    $activeDialogId: null,

    data() {
        return {
            showDetail: false,
            gameBoxes: null,
            gameBoxDetail: {
                Title: '',
                IP: '',
                Port: '',
                Description: ''
            },
            dialogVisible: false,  // Control the visibility of the dialog
            timer: null,

            info: null,
            startForm: {
                From: null,
                To: null,
            }
        }
    },

    methods: {
        showDialog(gameBox) {
            // console.log(gameBox);
            this.gameBoxDetail = gameBox;
            this.dialogVisible = true;  // Show the dialog
        },

        closeDialog() {
            this.dialogVisible = false;  // Hide the dialog
        },

        getGameboxes() {
            this.utils.GET("/team/gameboxes").then(res => {
                this.gameBoxes = res;
            });
        },

        getInfo() {
            this.utils.GET("/team/info").then(res => {
                this.info = res
            })
        },

        start() {
                this.utils.POST('/team/start', this.startForm).then(res => {
                    this.$message.success(res)
                }).catch(err => {
                    this.$message.error(err);
                })
        },

        activateBox(id) {
            this.$activeDialogId = id;
            this.startForm.From = this.info.Id;
            this.startForm.To = id;
            // console.log(this.$activeDialogId);
            // console.log(`Activating box with ID: ${id}`);
            this.start();
        },


    },

    mounted() {
        this.getGameboxes();
        this.timer = setInterval(this.getGameboxes, 5000);
        this.getInfo()
    },

    beforeDestroy() {
        clearInterval(this.timer);
    }
}
</script>



<style scoped>

</style>