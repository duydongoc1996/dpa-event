<template lang="pug">
  div.layout-wrapper
    div.layout-wrapper-inner
      Menu
      nuxt
</template>
<script>
import Menu from '~/components/Menu'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="sass">
.layout-wrapper
  width: 100%
  .layout-wrapper-inner
    margin: 0 auto
    background-color: white
</style>
