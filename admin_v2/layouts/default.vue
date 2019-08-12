<template lang="pug">
  div
    b-container(fluid)
      b-row(no-gutters)
        b-col(cols="2")
          LeftNavigation
        b-col(cols="10")
          div.outter
            div.inner
              nuxt
</template>
<script>
import LeftNavigation from '~/components/LeftNavigation'
export default {
  components: {
    LeftNavigation
  }
}
</script>
<style lang="sass" scoped>
.outter
  background-color: #f4f4f4
  padding: 3em 5em
  .inner
</style>
