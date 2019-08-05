<template lang="pug">
  div.wrapper-comming
    div.wrapper-comming-inner
      div.nom-header
        p.nom-heading comming soon
</template>

<script>
export default {
  name: 'CommingSoon',
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.wrapper-comming
  background-color: black
  .wrapper-comming-inner
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
