<template lang="pug">
  section.wrapper-countdown
    div.countdown-container
      div.countdown-header
        span COUNT DOWN
      div.countdown-box.colon
        div.countdown-number
          span {{days}}
        span DAYS
      div.countdown-box.colon
        div.countdown-number
          span {{hours}}
        span HRS
      div.countdown-box.colon
        div.countdown-number
          span {{minutes}}
        span MIN
      div.countdown-box
        div.countdown-number
          span {{seconds}}
        span SEC
</template>
<script>
export default {
  name: 'CountDown',
  props: {
    eventTime: {
      type: String,
      default: 'December 20, 2019 16:00:00'
    }
  },
  data() {
    return {
      interval: null,
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      start: '',
      end: ''
    }
  },
  mounted() {
    this.start = new Date().getTime()
    this.end = new Date(this.eventTime).getTime()
    // Update the count down every 1 second
    this.timerCount(this.start, this.end)
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end)
    }, 1000)
  },
  methods: {
    timerCount(start, end) {
      // Get todays date and time
      const now = new Date().getTime()
      // Find the distance between now an the count down date
      const distance = start - now
      const passTime = end - now
      if (distance < 0 && passTime < 0) {
        this.statusType = 'expired'
        clearInterval(this.interval)
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime)
        this.statusType = 'running'
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance)
        this.statusType = 'upcoming'
      }
    },
    calcTime: function (dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24))
      this.hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60))
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000)
      this.days = this.days < 10 ? '0' + this.days : this.days
      this.hours = this.hours < 10 ? '0' + this.hours : this.hours
      this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds
    }
  }

}
</script>
<style lang="sass" scoped>
.wrapper-countdown
  background-image: url('~assets/countdown-background.png')
  background-size: cover
  background-position: center center
.countdown-container
  top: 50%
  left: 50%
  transform: translate(-50%,-50%)
  position: absolute
  height: 200px
  width: fit-content
  background-color: rgba(1,1,1,0.5)
  padding: 40px
  @media only screen and (max-width: 992px)
    padding: 40px 10px
  @media only screen and (max-width: 768px)
    padding: 40px 0px
  span
    color: white
  .countdown-header
    text-align: center
  .countdown-box
    position: relative
    display: inline-block
    float: left
    margin: 0
    text-align: center
    .countdown-number
      background-color: transparent
      color: white
      width: 70px
      height: 70px
      border-radius: 5px
      vertical-align: middle
      line-height: 70px
      font-size: 30px
      font-weight: 400
  .colon::after
    position: absolute
    font-weight: 700
    right: 0
    bottom: 50%
    color: white
    content: ":"
</style>
