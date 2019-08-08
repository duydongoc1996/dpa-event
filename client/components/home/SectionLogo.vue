<template lang="pug">
  div.wrapper-logo
    b-container.wrapper-logo-inner(fluid)
      b-row(
        align-v="center"
      )
        b-col(
          cols="12"
          lg="4"
        )
          div.list-logo
            p.text
              strong {{ $t('homePage.logo.host') }}
            div.logo-double
              a(href="http://tokenpost.com/")
                b-img.logo-tokenpost(
                  src="~/assets/logo/TokenPost logo.png"
                )
            div.logo-double
              a(href="https://www.econotimes.com/")
                b-img.logo-econotimes(
                  src="~/assets/logo/Econotimes logo.png"
                )
        b-col(
          cols="12"
          lg="4"
        )
          div.list-logo
            p.text
              strong {{ $t('homePage.logo.organizer') }}
            div.logo-single
              a(href="https://purpleswan.io/")
                b-img.logo-purpleswan(
                  src="~/assets/logo/PURPLE SWAN LOGO_gold.png"
                )
        b-col(
          cols="12"
          lg="4"
        )
          div.list-logo
            p.text
              strong {{ $t('homePage.logo.marketer') }}
            div.logo-single
              a(href="https://www.adelcompany.com/")
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
  background-color: #f5f5f5
  .wrapper-logo-inner
    .row
      min-height: 100px
    .list-logo
      position: relative
      color: #cec230
      margin: 0 auto
      text-align: center
      .text
        margin: 10px 0 0 0
        font-size: 20px
      .logo-double
        position: relative
        display: flex
        width: 50%
        float: left
        height: 80px
        align-items: center
        justify-content: center
        a
          img
            width: 100%
            max-width: 250px
          .logo-tokenpost
            padding-right: 2px
          .logo-econotimes
            padding-left: 2px
      .logo-single
        position: relative
        display: flex
        height: 80px
        align-items: center
        justify-content: center
        a
          img
            width: 100%
            max-width: 250px
          .logo-purpleswan
          .logo-adel
            max-height: 80px
            width: auto
</style>
