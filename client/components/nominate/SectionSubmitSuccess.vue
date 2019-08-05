<template lang="pug">
  div.wrapper-submit
    div.wrapper-submit-inner
      div.submit-image
        b-img(src="~/assets/nominate-success.png" alt="sponsorship image")
      p.submit-description Your nomination application for Decentralized People's Awards 2019 has been successfully submitted.
      p.submit-description We have sent a copy of your application to your email and we will send the notification email to the nominee(s) you have nominated shortly. Thank you!
      nuxt-link(to="/")
        div.goback-btn
          span Go back to home &nbsp;
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
    padding: 50px
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
      .submit-description
        margin: 0
      .goback-btn
        margin: 10px auto
        display: block
        color: white
        width: 10em
        padding: 10px
        background-color: #cec230
        border-color: #cec230
</style>
