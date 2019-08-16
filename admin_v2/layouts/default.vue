<template lang="pug">
  div
    b-container.no-padding(fluid)
      b-row(no-gutters)
        b-col(cols="3")
          LeftNavigation
        b-col(cols="9")
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
.no-padding
  padding: 0
.outter
  background-color: #f4f4f4
  padding: 3em 5em
  min-height: 100vh
  .inner
</style>
