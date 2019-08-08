<template lang="pug">
  div.wrapper-footer
    div.wrapper-footer-inner
      b-container(fluid)
        b-row
          b-col.footer-col(
            sm="12"
            lg="6"
            order="4"
            order-lg="1"
          )
            div.footer-brand
              b-img(
                src="~/assets/logo/DPA logo_white text.png"
                alt="alt"
                width="300"
              )
              p.footer-copyright COPYRIGHT @DPA ALL RIGHTS RESERVED
          b-col.footer-col(
            sm="4"
            lg="2"
            order="1"
            order-lg="2"
          )
            div.footer-contact
              p
                strong {{ $t('footer.contactus') }}
              p info@purpleswan.io
          b-col.footer-col(
            sm="4"
            lg="2"
            order="2"
            order-lg="3"
          )
            div.footer-sitemap
              p
                strong {{ $t('footer.sitemap') }}
              p
                nuxt-link(to="/") {{ $t('footer.home') }}
              p
                nuxt-link(to="/sponsorship") {{ $t('footer.sponsorship') }}
              p
                nuxt-link(to="/attend") {{ $t('footer.attend') }}
              p
                nuxt-link(to="/nominate") {{ $t('footer.nominate') }}
              p
                nuxt-link(to="/vote") {{ $t('footer.vote') }}
          b-col.footer-col(
            sm="4"
            lg="2"
            order="3"
            order-lg="4"
          )
            div.footer-social
              p
                strong {{ $t('footer.socials') }}
              div
                a(href="#")
                  span.social-icon
                    fa(:icon="['fab', 'facebook-f']")
                a(href="#")
                  span.social-icon
                    fa(:icon="['fab', 'twitter']")
                a(href="https://www.instagram.com/tokenpost.kr/?hl=ko")
                  span.social-icon
                    fa(:icon="['fab', 'instagram']")
                a(href="https://www.youtube.com/channel/UC5QcOnLK-Ziu2DLhakgQhJw")
                  span.social-icon
                    fa(:icon="['fab', 'youtube']")
</template>

<script>
export default {
  name: 'SectionFooter',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.wrapper-footer
  background-color: black
  .wrapper-footer-inner
    padding-top: 100px
    padidng-bottom: 50px
    color: white
    .footer-col
      padding: 10px
      .footer-brand
        margin-left: 2em
        @media only screen and (max-width: 992px)
          margin-left: 0
          text-align: center
          padding-top: 30px
          border-top: 1px solid grey
        img
          width: 250px
          @media only screen and (max-width: 992px)
            width: 200px
        .footer-copyright
          padding: 10px 0
          font-size: 12px
      .footer-contact
      .footer-sitemap
        p
          a
            color: white
      .footer-social
        .social-icon
          display: block
          float: left
          text-align: center
          verticle-align: middle
          color: black
          background-color: white
          width: 30px
          height: 30px
          border: 1px solid black
          border-radius: 30px
          padding: 3px 5px 5px 5px
          margin-right: 5px
</style>
