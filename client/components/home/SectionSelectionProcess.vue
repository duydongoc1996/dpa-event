<template lang="pug">
  div.wrapper-process
    div.wrapper-process-inner
      div.header
        p
          strong {{ $t('homePage.dpa.heading') }}
      div.body
        div.line
        b-container(fluid)
          b-row
            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="/image/thumbs up.png"
                    fluid
                  )
                div.content
                  p.title Nominate
                  p.date
                  p.text {{ $t('homePage.dpa.description.d1') }}

            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="/image/vote_transparent.png"
                    fluid
                  )
                div.content
                  p.title Vote
                  p.date
                  p.text {{ $t('homePage.dpa.description.d2') }}
            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="/image/evaluation.png"
                    fluid
                  )
                div.content
                  p.title Evaluation
                  p.date
                  p.text {{ $t('homePage.dpa.description.d3') }}
            b-col.process-col(
              cols="12"
              sm="3"
            )
              div.process
                div.image
                  b-img(
                    src="/image/trophy.png"
                    fluid
                  )
                div.content
                  p.title Announcement
                  p.date
                  p.text {{ $t('homePage.dpa.description.d4') }}
</template>
<script>
export default {
  name: 'SectionSelectionProcess',
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.wrapper-process
  background-color: white
  .wrapper-process-inner
    .header
      text-align: center
      padding: 50px 0 30px 0
      p
        color: #cec230
        font-size: 30px
    .body
      position: relative
      padding: 0 10%
      padding-bottom: 50px
      @media only screen and (max-width: 2000px)
        padding: 0 10%
      @media only screen and (max-width: 768px)
        padding: 0 5%
      .process-col
        @media only screen and (max-width: 768px)
          padding: 0 5px
        .process
          .image
            height: 200px
            text-align: center
            display: flex
            justify-content: center
          .content
            padding-top: 10px
            text-align: center
            color: black
            .title
              font-weight: bold
              font-size: 20px
            .date
            .text
</style>
