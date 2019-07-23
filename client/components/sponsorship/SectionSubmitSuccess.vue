<template lang="pug">
  div.wrapper-submit
    div.wrapper-submit-inner
      p.submit-heading Sponsorship oppotunities
      div.submit-image
        b-img(src="" alt="sponsorship image")
      p.submit-description You have submitted a sponsorship participation application for the Decentralized People's Awards 2019.
      p.submit-description We have sent a copy of your application to your email, and the organizer will contact you shortly after reviewing your application. Thank you!
      b-button.goback-btn(
        squared
      ) Go back to home &nbsp;
        fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionSubmitSuccess',
  data() {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  .wrapper-submit
    background-color: white
    .wrapper-submit-inner
      margin: 0 auto
      text-align: center
      width: 100%
      margin: 50px 0
      .submit-heading
        color: #cec230
        font-size: 30px
      .submit-image
        margin: 0 auto
        width: 300px
        height: 300px
        border: 1px solid grey
      .submit-description
        margin: 0
      .goback-btn
        background-color: #cec230
        border-color: #cec230
</style>
