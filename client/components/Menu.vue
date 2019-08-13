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
            nuxt-link(:to="localePath('index')")
              strong {{ $t('menu.home') }}
          b-nav-item
            nuxt-link(:to="localePath('sponsorship')")
              strong {{ $t('menu.sponsorship') }}
          b-nav-item
            nuxt-link(:to="localePath('attend')")
              strong {{ $t('menu.attend') }}
          b-nav-item
            nuxt-link(:to="localePath('nominate')")
              strong {{ $t('menu.nominate') }}
          b-nav-item
            nuxt-link(:to="localePath('vote')")
              strong {{ $t('menu.vote') }}
        b-navbar-nav.ml-auto
          b-nav-item.insight(
            :href="(language == 'en') ? 'https://tokenpost.com/insights' : 'https://www.tokenpost.kr/insights'"
          )
              div.insight-btn
                strong {{ $t('menu.insight') }}
          b-nav-item.language
            label(for="dd-language") LANGUAGE &nbsp;
            b-dropdown(
              id="languageDropdown"
              :text="currentLanguage.toUpperCase()"
              rounded
              variant="outline-light"
            )
              b-dropdown-item(
                v-for="locale in availableLocales"
                :key="locale.code"
              )
                nuxt-link(
                  :to="switchLocalePath(locale.code)"
                ) {{ locale.name }}

</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      language: 'en',
      availableLocales: this.$i18n.locales,
      currentLanguage: this.$i18n.locale
    }
  },
  mounted() {
    // this.$log.debug(this.$i18n.locales)
  },
  methods: {
    changeLanguage(e) {
      // window.location.href = e.toLowerCase()
      this.$log.debug(this.$i18n.localePath('EN'))
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
        margin-left: 0em !important
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
        #languageDropdown
          .btn
            border-radius: 2em
          .dropdown-menu
            min-width: 4em
            text-align: center
            a
              color: black
</style>
