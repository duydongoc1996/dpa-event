<template lang="pug">
  div.wrapper-header
    div.wrapper-header-inner
      div.nom-header
        p.nom-heading
          strong VOTE
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
    height: 500px
    position: relative
    background-image: url(~assets/vote-background.png)
    background-size: cover
    background-position: center center
    background-repeat: no-repeat
    .nom-header
      position: relative
      background-color: rgba(0, 0, 0, 0.5)
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      .nom-heading
        color: #fefefe
        font-size: 34pt
</style>
