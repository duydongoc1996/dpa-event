<template lang="pug">
  div.wrapper-footer
    div.wrapper-footer-inner
      b-container
        b-row
          b-col.footer-col(
            sm="6"
          )
            div.footer-brand
              b-img(src="~/assets/DPA_logo.webp", alt="alt")
              p.footer-copyright COPYRIGHT @DPA ALL RIGHTS RESERVED
          b-col.footer-col(
            sm="2"
          )
            div.footer-contact
              p
                strong CONTACT US
              p hello@dpawards.com
          b-col.footer-col(
            sm="2"
          )
            div.footer-sitemap
              p
                strong SITE MAP
              p
                a(href="#") Home
              p
                a(href="#") Sponsorship
              p
                a(href="#") Attend
              p
                a(href="#") Nominate
              p
                a(href="#") Vote
          b-col.footer-col(
            sm="2"
          )
            div.footer-social
              p
                strong SOCIALS
              div
                a(href="#")
                  span.social-icon
                    fa(:icon="['fab', 'facebook-f']")
                a(href="#")
                  span.social-icon
                    fa(:icon="['fab', 'twitter']")
                a(href="#")
                  span.social-icon
                    fa(:icon="['fab', 'instagram']")
                a(href="#")
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
  .wrapper-footer-inner
    padding-top: 100px
    padidng-bottom: 50px
    color: white
    .footer-col
      padding: 10px
      .footer-brand
        img
        .footer-copyright
          padding: 10px 0
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
