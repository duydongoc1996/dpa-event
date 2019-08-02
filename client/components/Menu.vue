<template lang="pug">
div.wrapper-menu
  div.wrapper-menu-inner
    b-navbar(
      toggleable="lg"
      type="dark"
      variant="transparent"
    )
      b-navbar-brand.ml-auto.logo
        nuxt-link(to="/")
          b-img(
            src="~/assets/logo/DPA logo_white text.png"
            width="200"
          )
      b-navbar-toggle(target="nav-collapse")
      b-collapse(id="nav-collapse" is-nav)
        b-navbar-nav.mx-auto
          b-nav-item
            nuxt-link(to="/")
              strong Home
          b-nav-item
            nuxt-link(to="/sponsorship")
              strong Sponsorship
          b-nav-item
            nuxt-link(to="/attend")
              strong Attend
          b-nav-item
            nuxt-link(to="/nominate")
              strong Nominate
          b-nav-item
            nuxt-link(to="/vote")
              strong Vote
        b-navbar-nav.ml-auto
          b-nav-item.insight(
            :href="(language == 'en') ? 'https://tokenpost.com/insights' : 'https://www.tokenpost.kr/insights'"
          )
              div.insight-btn
                strong Insight
          b-nav-item.language
            label(for="dd-language") LANGUAGE &nbsp;
            b-form-select.dd-language(
              id="dd-language"
              variant="outline-light"
              :options="optionsLanguage"
              v-model="language"
            )
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      language: 'en',
      optionsLanguage: [
        { value: 'en', text: 'EN' },
        { value: 'kr', text: 'KR' }
      ]
    }
  }
}
</script>

<style lang="sass">
.wrapper-menu
  position: absolute
  z-index: 2
  width: 100%
  @media only screen and (max-width: 992px)
    #nav-collapse
      background-color: grey
      z-index: 2
  .wrapper-menu-inner
    .logo
      margin-left: 2em !important
      padding: 10px
      img
        width: 200px
      @media only screen and (max-width: 992px)
        margin-left: 1em !important
        img
          width: 120px
    .navbar
      padding: 0
      .navbar-nav
        .nav-item
          padding: 20px 15px
          font-size: 1.2rem
          .nav-link
            color: white
            a
              color: white
              padding: 5px
              text-decoration: none
            .nuxt-link-exact-active
              border-bottom: 2px solid white
      .insight
        padding: 20px 5px !important
        a
          border-bottom: none !important
        .insight-btn
          background-color: #cec230
          border-color: #cec230
          padding: 5px 20px
      .language
        padding: 20px 5px !important
        margin-left: 0 !important
        margin: auto
        label
          @media only screen and (max-width: 1200px)
            display: none
          @media only screen and (max-width: 992px)
            display: initial
        .dd-language
          width: 4em
          border-radius: 2em
          background-color: transparent
          color: white
          background: url(~assets/angledown.png) no-repeat right 0.75rem center/8px 10px
          option
            color: black
          &:focus
            border-color: #cec230
            box-shadow: 0 0 0 0.2rem rgba(206, 194, 48, 0.25)
</style>
