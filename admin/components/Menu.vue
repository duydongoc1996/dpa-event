<template lang="pug">
    div.menu
      b-container(fluid)
        b-row
          b-col
            div
              nuxt-link(
                to="/schedule"
              ) Schedule
          b-col
            div
              nuxt-link(
                to="/awardscategory"
              ) Awards Category
          b-col
            div
              nuxt-link(
                to="/sponsors"
              ) Sponsors
          b-col
            div
              nuxt-link(
                to="/partners"
              ) Partners
      hr
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
.menu
  padding: 20px
  text-align: center
</style>
