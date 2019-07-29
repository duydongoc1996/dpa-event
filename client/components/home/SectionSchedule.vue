<template lang="pug">
  div.wrapper-schedule
    div.wrapper-schedule-inner
      div.sche-header
        p.sche-heading
          strong SCHEDULE
        p.sche-date December 20th, 2019 19:00 - 22:00
      div.sche-list
        div.sche-item(
          v-for="(item,index) in items"
        )
          b-container.sche-content(fluid)
            b-row
              b-col(
                sm="5"
                lg="3"
              )
                div.sche-time
                  span {{ item.time }}
              b-col(
                sm="7"
                lg="9"
              )
                div.sche-detail
                  p.sche-name
                    strong {{ item.event }}
                  p.sche-action {{ item.title }}
                  p.sche-description {{ item.speaker }}
          div.sche-divider(
            v-if="index < items.length -1"
          )
</template>

<script>
export default {
  name: 'SectionSchedule',
  data() {
    return {
      items: null
    }
  },
  mounted() {
    // Get list schedule
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/schedules'
    }).then((res) => {
      this.items = res.data
    }).catch(err => this.$log.debug(err))
  }
}
</script>

<style lang="sass">
.wrapper-schedule
  background-image: url('~assets/2.png')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  .wrapper-schedule-inner
    width: 100%
    padding: 50px 0
    background-color: rgba(0,0,0,0.5)
    .sche-header
      text-align: center
      padding-bottom: 20px
      .sche-heading
        font-size: 30px
        color: #cec230
      .sche-date
        color: white
    .sche-list
      width: 992px
      background-color: rgba(255,255,255,0.4)
      margin: 0 auto
      padding: 30px 0
      @media only screen and (max-width: 992px)
        width: 100%
      .sche-item
        color: white
        padding: 30px
        .sche-content
          padding-bottom: 20px
          .sche-time
            border: 1px solid #cec230
            border-radius: 20px
            background-color: #cec230
            width: 10em
            padding: 5px
            text-align: center
          .sche-detail
            line-height: 1
            @media only screen and (max-width: 576px)
              margin: 20px
            .sche-name
              font-size: 20px
              font-weight: 500
            .sche-action
            .sche-description
      .sche-divider
        width: 100%
        height: 1px
        background-color: white
        margin: 0 auto

</style>
