<!-- 註解掉的部份是原本第幾輪的倒數計時器，現在改成顯示系統時間 -->

<template>
    <v-card-text class="text-center" v-if="time !== null">
        <div v-if="time.Status === 'on'">
            <!-- <div>{{$t('timer.til_round_end',{round: time.NowRound})}}</div>
            <p class="display-1 text--primary">
                {{minute}} {{$t('general.minute')}} {{second}} {{$t('general.second')}}
            </p> -->
            <p class="display-1 text--primary">
                系統時間
            </p>
            <p class="display-1 text--primary">
                {{year}} 年 {{month}} 月 {{day}} 日
            </p>
            <p class="display-1 text--primary">
                {{hour}} 時 {{minute}} 分 {{second}} 秒
            </p>
        </div>
        <div v-else-if="time.Status === 'wait'">
            <p class="display-1 text--primary">
                {{$t('timer.not_begin')}}
            </p>
        </div>
        <div v-else-if="time.Status === 'pause'">
            <p class="display-1 text--primary">
                {{$t('timer.pause')}}
            </p>
        </div>
        <div v-else-if="time.Status === 'end'">
            <p class="display-1 text--primary">
                {{$t('timer.end')}}
            </p>
        </div>
    </v-card-text>
</template>

<script>
    export default {
        name: "Timer",
        data() {
            return {
                timer: null,
                requestTimer: null,

                time: null,
                year: 0,
                month: 0,
                day: 0,
                hour: 0,
                minute: 0,
                second: 0,
            }
        },
        mounted() {
            this.getTime()
            this.updateTime()  // 初始化時先顯示一次當前時間
            this.requestTimer = setInterval(this.getTime, 10000)
            // this.timer = setInterval(this.timeTick, 1000)
            this.timer = setInterval(this.updateTime, 1000)
        },

        beforeDestroy() {
            clearInterval(this.requestTimer)
            clearInterval(this.timer)
        },

        methods: {
            getTime() {
                this.utils.GET("/time").then(res => {
                    this.time = res
                    // this.timeTick()
                })
            },

            // 時間倒數
            // timeTick() {
            //     this.time.RoundRemainTime--
            //     this.minute = Math.floor(this.time.RoundRemainTime / 60)
            //     this.second = this.time.RoundRemainTime - this.minute * 60
            //     if (this.time.RoundRemainTime <= 0) {
            //         this.time.RoundRemainTime = this.time.Duration * 60
            //         this.time.NowRound++
            //     }
            // }

            updateTime() {
                const now = new Date()
                this.year = now.getFullYear()
                this.month = now.getMonth() + 1  // 月份從 0 開始，因此要 +1
                this.day = now.getDate()
                this.hour = now.getHours()
                this.minute = now.getMinutes()
                this.second = now.getSeconds()
            }
        },
    }
</script>

<style scoped>

</style>