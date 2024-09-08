<template>
    <v-card class="mx-auto" v-if="info !== null">
        <v-snackbar v-model="snackBarVisible" :color="snackBarColor" :timeout="3000" :top="true">{{ message }}
        </v-snackbar>

        <v-card-title>
            <span style="margin-right: 20px;">{{$t('flag.submit_flag')}}</span>
            <v-text-field
                    @keyup.enter.native="submitFlag"
                    v-model="inputFlag"
                    :label="$t('flag.input_your_flag')"
                    clearable
            ></v-text-field>
            <v-btn style="margin-left: 20px;" @click="submitFlag">
                {{$t('flag.submit')}}
            </v-btn>
        </v-card-title>
        <v-card-text>
            <h2>POST <code style="background-color: #1c1c1c">/flag</code></h2><br>
            <span><b>Header</b></span><br>
            <span>Content-Type: application/json</span><br>
            <span>Authorization: {{info.Token}}</span><br>
            <p><b>Body</b></p>
            <code class="pa-3" style="width: 100%; background-color: #1c1c1c; color: rgba(255, 255, 255, 0.7);">{"flag":
                "your_flag_here"}</code>
            <br><br>
            <v-divider></v-divider>
            <br>
            <p>
                <code class="pa-3" style="width: 100%; background-color: #1c1c1c; color: rgba(255, 255, 255, 0.7);">{{getCurlCommand()}}</code>
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
    import axios from "axios";
    import { EventBus } from '../router.js';

    export default {
        name: "SubmitFlag",

        data: () => ({
            info: null,
            inputFlag: '',

            message: '',
            snackBarVisible: false,
            snackBarColor: 'success',
            startTime: null,
            endTime: null,
            elapsedTime: '',
        }),

        mounted() {
            this.getInfo()
            EventBus.$on('start-time', (time) => {
            this.startTime = time;
            });
        },

        methods: {
            getInfo() {
                this.utils.GET("/team/info").then(res => {
                    this.info = res
                })
            },
            submitFlag() {
                this.recordSolveTime();
                axios.post(this.utils.baseURL + '/flag', {
                    'flag': this.inputFlag,
                    'time': this.elapsedTime
                }, {
                    headers: {
                        'Authorization': this.info.Token
                    }
                }).then(res => {
                    this.inputFlag = ''
                    this.message = res.data.data
                    this.snackBarColor = 'success'
                    this.snackBarVisible = true
                }).catch(err => {
                    this.message = err.response.data.msg
                    this.snackBarColor = 'error'
                    this.snackBarVisible = true
                });
            },
            getCurlCommand() {
                // The curl command is different in windows and *nix os.
                if ((navigator.platform === "Win32") || (navigator.platform === "Windows")) {
                    return `curl -X POST ${window.location.origin}/api/flag -H "Authorization: ${this.info.Token}" -d "{ \\"flag\\": \\"your_flag_here\\" }"`
                }
                return `curl -X POST ${window.location.origin}/api/flag -H 'Authorization: ${this.info.Token}' -d '{ "flag": "your_flag_here" }'`
            },
            recordSolveTime() {
                // 記錄結束時間
                this.endTime = Date.now();

                // 確保有 startTime 才進行計算
                if (this.startTime) {
                    // 計算解題時間，單位為秒
                    this.elapsedTime = (this.endTime - this.startTime) / 1000;

                    // 這裡可以發送請求將 elapsedTime 更新到後端
                    console.log(`Elapsed time: ${this.elapsedTime} seconds`);
                } else {
                    console.error('Start time is not available.');
                }
            }
        }
    }
</script>

<style scoped>

</style>