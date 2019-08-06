<template lang="pug">
  div.wrapper-header
    div.wrapper-header-inner
      div.nom-header
        p.nom-heading
          strong SPONSORSHIP
          br
          span Coming soon
</template>

<script>
export default {
  name: 'SectionHeader',
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.wrapper-header
  background-image: url(~assets/sponsorship-background.png)
  background-size: cover
  background-position: center center
  height: 500px
  .wrapper-header-inner
    width: 100%
    height: 100%
    background-color: rgba(0,0,0,0.4)
    .nom-header
      position: relative
      text-align: center
      top: 40%
      .nom-heading
        color: white
        font-size: 30px
</style>
