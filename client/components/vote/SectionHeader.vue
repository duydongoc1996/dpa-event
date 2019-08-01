<template lang="pug">
  div.wrapper-header
    div.wrapper-header-inner
      div.nom-header
        p.nom-heading
          strong VOTE
        p.comming-soon comming soon
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
  background-color: black
  .wrapper-header-inner
    width: 100%
    height: 100%
    position: relative
    background-color: rgba(0,0,0,0.4)
    .nom-header
      position: relative
      text-align: center
      padding-top: 300px
      .nom-heading
        color: white
        font-size: 30px
      .comming-soon
        color: white
        font-size: 24px
</style>
