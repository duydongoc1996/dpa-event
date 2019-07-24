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
            src="~/assets/DPA_logo.webp"
          )
      b-navbar-toggle(target="nav-collapse")
      b-collapse(id="nav-collapse" is-nav)
        b-navbar-nav.mx-auto
          b-nav-item
            nuxt-link(to="/") Home
          b-nav-item
            nuxt-link(to="/sponsorship") Sponsorship
          b-nav-item
            nuxt-link(to="/attend") Attend
          b-nav-item
            nuxt-link(to="/nominate") Nominate
          b-nav-item
            nuxt-link(to="/vote") Vote
        b-navbar-nav.ml-auto.language
          b-nav-item
            label(for="dd-language") LANGUAGE &nbsp;
            b-dropdown.dd-language(
              id="dd-language"
              text="EN"
              variant="outline-light"
            )
              b-dropdown-item EN
              b-dropdown-item KR
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {}
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
      margin-left: 0 !important
      padding: 10px
      @media only screen and (max-width: 992px)
        img
          width: 120px
    .navbar
      padding: 0
      .navbar-nav
        .nav-item
          padding: 20px 15px
          .nav-link
            color: white
            a
              color: white
              padding: 5px
              text-decoration: none
            .nuxt-link-exact-active
              border-bottom: 2px solid white
      .language
        margin-left: 0 !important
        .dropdown
          .dropdown-toggle
            border-radius: 20px
            padding: 3px 15px
          .dropdown-menu
            min-width: 4em
            .dropdown-item
              color: black !important
</style>
