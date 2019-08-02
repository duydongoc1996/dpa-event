<template lang="pug">
  div.wrapper-logo
    b-container.wrapper-logo-inner(fluid)
      b-row(
        align-v="center"
      )
        b-col(
          cols="12"
          sm="4"
        )
          div.list-logo
            span.text
              strong HOST
            a(href="http://tokenpost.com/")
              b-img.logo-tokenpost(
                src="~/assets/logo/TokenPost logo.png"
                fluid
              )
            span &nbsp;
            a(href="https://www.econotimes.com/")
              b-img.logo-econotimes(
                src="~/assets/logo/Econotimes logo.png"
                fluid
              )
        b-col(
          cols="12"
          sm="4"
        )
          div.list-logo
            span.text
              strong ORGANIZER
            a(href="https://purpleswan.io/")
              b-img.logo-purpleswan(
                src="~/assets/logo/PURPLE SWAN LOGO_gold.png"
                fluid
              )
        b-col(
          cols="12"
          sm="4"
        )
          div.list-logo
            span.text
              strong MARKETER
            a(href="https://www.adelcompany.com/")
              b-img.logo-adel(src="~/assets/logo/Adel_logo_v1.png" fluid)
</template>

<script>
export default {
  name: 'SectionLogo',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.wrapper-logo
  background-color: #f5f5f5
  .wrapper-logo-inner
    .row
      min-height: 100px
    .list-logo
      color: #cec230
      margin: 0 auto
      text-align: center
      .logo-tokenpost
        height: 30px
      .logo-econotimes
        height: 18px
      .logo-purpleswan
        height: 20px
      .logo-adel
        height: 70px
      .text::after
        content:  " | "
</style>
