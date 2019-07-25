<template lang="pug">
  div.wrapper-submit
    div.wrapper-submit-inner
      div.submit-image
        b-img(src="~/assets/attend-success.png" alt="sponsorship image")
      p.submit-description Confirmation email will be sent shortly. Looking forward to seeing you at the venue!
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
