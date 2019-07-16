<template lang="pug">
  div.wrapper-logo
    b-container.wrapper-logo-inner
      b-row(
        align-v="center"
      )
        b-col(
          sm="5"
        )
          div.list-logo
            span.text HOST
            b-img.logo-tokenpost(src="https://static.wixstatic.com/media/24cbfa_c94eb8c56707444f9e4b72f7074efe35~mv2.png/v1/fill/w_282,h_69,al_c,lg_1,q_80/tokenpost_logo.webp")
            span &nbsp;
            b-img.logo-econotimes(src="https://static.wixstatic.com/media/24cbfa_a1c6f2d96e0246e78d9f27d9a4b7ab65~mv2.png/v1/fill/w_318,h_41,al_c,q_80,usm_0.66_1.00_0.01/Logo_EonoTimes.webp")
        b-col(
          sm="4"
        )
          div.list-logo
            span.text ORGANIZER
            b-img.logo-purpleswan(src="https://static.wixstatic.com/media/24cbfa_fa40e33dee4640f78f8eb8a43759f191~mv2.png/v1/fill/w_291,h_42,al_c,q_80,usm_0.66_1.00_0.01/PURPLE%20SWAN%20LOGO_gold.webp")
        b-col(
          sm="3"
        )
          div.list-logo
            span.text MARKETER
            b-img.logo-adel(src="https://static.wixstatic.com/media/24cbfa_e1d50474167b4e4a8a8e42fe6495a451~mv2.png/v1/crop/x_497,y_160,w_1003,h_586/fill/w_155,h_88,al_c,q_80,usm_0.66_1.00_0.01/horizontal_on_transparent_by_logaster_pn.webp")
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
  background-color: #1e1e1e
  .wrapper-logo-inner
    .row
      min-height: 100px
    .list-logo
      color: #cec230
      margin: 0 auto
      .logo-tokenpost
        height: 30px
      .logo-econotimes
        height: 15px
      .logo-purpleswan
        height: 20px
      .logo-adel
        height: 30px
      .text::after
        content:  " | "
      @media only screen and (max-width: 992px)
        width: 8em
        .text::after
          content: ""
</style>
