<template lang="pug">
  div.wrapper-schedule
    div.wrapper-schedule-inner
      div.sche-header
        p.sche-heading SCHEDULE
        p.sche-date February 20th, 2019 19:00 - 22:00
      div.sche-list
        div.sche-item(
          v-for="(item,index) in items"
        )
          b-container.sche-content
            b-row
              b-col(sm="3")
                div.sche-time
                  span {{ item.time }}
              b-col(sm="9")
                div.sche-detail
                  p.sche-name {{ item.name }}
                  p.sche-action {{ item.action }}
                  p.sche-description {{ item.description }}
          div.sche-divider(
            v-if="index < items.length -1"
          )
</template>

<script>
export default {
  name: 'SectionSchedule',
  data() {
    return {
      items: [
        {
          time: '5:30 PM - 6:50PM',
          name: 'REGISTRATION',
          action: 'OPENING & WELCOME SPEECH',
          description: 'Sonny Kwon, TokenPost'
        },
        {
          time: '5:30 PM - 6:50PM',
          name: 'REGISTRATION',
          action: 'OPENING & WELCOME SPEECH',
          description: 'Sonny Kwon, TokenPost'
        },
        {
          time: '5:30 PM - 6:50PM',
          name: 'REGISTRATION',
          action: 'OPENING & WELCOME SPEECH',
          description: 'Sonny Kwon, TokenPost'
        },
        {
          time: '5:30 PM - 6:50PM',
          name: 'REGISTRATION',
          action: 'OPENING & WELCOME SPEECH',
          description: 'Sonny Kwon, TokenPost'
        },
        {
          time: '5:30 PM - 6:50PM',
          name: 'REGISTRATION',
          action: 'OPENING & WELCOME SPEECH',
          description: 'Sonny Kwon, TokenPost'
        },
        {
          time: '5:30 PM - 6:50PM',
          name: 'REGISTRATION',
          action: 'OPENING & WELCOME SPEECH',
          description: 'Sonny Kwon, TokenPost'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
.wrapper-schedule
  background-image: url('https://picsum.photos/1024/480/?image=10')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  .wrapper-schedule-inner
    width: 100%
    padding: 50px 0
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
