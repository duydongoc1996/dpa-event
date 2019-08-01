<template lang="pug">
  div.wrapper-logo
    b-container.wrapper-logo-inner(fluid)
      b-row(
        align-v="center"
      )
        b-col(
          cols="4"
        )
          div.list-logo
            span.text
              strong HOST
            b-img.logo-tokenpost(src="~/assets/logo/TokenPost logo.png")
            span &nbsp;
            b-img.logo-econotimes(src="~/assets/logo/Econotimes logo.png")
        b-col(
          cols="4"
        )
          div.list-logo
            span.text
              strong ORGANIZER
            b-img.logo-purpleswan(src="~/assets/logo/PURPLE SWAN LOGO_gold.png")
        b-col(
          cols="4"
        )
          div.list-logo
            span.text
              strong MARKETER
            b-img.logo-adel(src="~/assets/logo/Adel_logo_v1.png")
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
  background-color: #111
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
