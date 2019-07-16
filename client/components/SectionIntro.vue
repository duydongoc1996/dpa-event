<template lang="pug">
  div.wrapper-intro
    b-container.wrapper-intro-inner(fluid)
      b-row(no-gutters)
        b-col(
          sm="4"
        )
          div.wrapper-countdown
            div.countdown
              Countdown
        b-col(
          sm="8"
        )
          div.wrapper-description
            div.wrapper-description-inner
              p.des-heading DECENTRALIZED PEOPLE'S AWARDS 2019
              p.des-date DECEMBER 20, 2019 | 16:00 - 21:00
              p.des-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              p.des-text It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              div.wrapper-button
                b-button.custom-button(squared) ATTEND &nbsp;
                  fa(icon="arrow-right")
                b-button.custom-button(squared) NOMINATE &nbsp;
                  fa(icon="arrow-right")
</template>

<script>
import Countdown from '~/components/Countdown'
export default {
  name: 'SectionIntro',
  components: {
    Countdown
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.wrapper-intro
  .wrapper-intro-inner
    padding: 0
    .wrapper-countdown
      height: 607px
      background-color: grey
    .wrapper-description
      height: fit-content
      background-color: white
      .wrapper-description-inner
        padding: 50px
        max-width: 50em
        .des-heading
          color: #cec230
          font-size: 30px
        .des-date
          font-weight: 600
        .custom-button
          color: white
          background-color: #cec230
          border-color: #cec230
          margin-right: 10px
          width: 200px

</style>
