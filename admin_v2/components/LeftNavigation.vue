<template lang="pug">
  div.left-navigation
    div.inner
      div.header
        h3.heading
          strong DPA 2019
          span  ADMIN
        nuxt-link.header-btn(to="/")
          span HOME
        span.header-btn(
          @click="logout"
        )
          span LOGOUT
      div.navigation
        nuxt-link.navigation-item(to="/")
          div.content
            fa(icon="star")
            span.center Event management page
            span.right &gt;
        nuxt-link.navigation-item(to="/sponsorship")
          div.content
            fa(icon="heart")
            span.center Sponsorship page
            span.right &gt;
        nuxt-link.navigation-item(to="/attendee")
          div.content
            fa(icon="plus-square")
            span.center Attendee management page
            span.right &gt;
        nuxt-link.navigation-item(to="/nominate")
          div.content
            fa(icon="user")
            span.center Nominate page
            span.right &gt;
        nuxt-link.navigation-item(to="/vote")
          div.content
            fa(icon="thumbtack")
            span.center Vote page
            span.right &gt;
</template>
<script>
export default {
  name: 'LeftNavigation',
  data() {
    return {
    }
  },
  methods: {
    logout(e) {
      e.preventDefault()
      sessionStorage.token = null
      window.location.href = '/login'
    }
  }
}
</script>
<style lang="sass" scoped>
.left-navigation
  .inner
    .header
      text-align: center
      padding: 3em 0
      .heading
        text-align: center
        color: #d1c531
      .header-btn
        border: 1px solid #d1c531
        border-radius: 20px
        color: #d1c531
        padding: 5px 10px
        text-decoration: none
    .navigation
      .nuxt-link-exact-active
        .content
          border-left: 4px solid #d1c531
          background-color: #f4f4f4
      .navigation-item
        text-decoration: none
        color: grey
        .content
          padding: 1em 0
          .center
            padding-left: 1em
          .right
            float: right
            padding-right: 1em
</style>
