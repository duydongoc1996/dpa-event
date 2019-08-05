<template lang="pug">
  div.wrapper-info
    div.wrapper-info-inner
      div.info-header
        p.info-heading
          strong Sponsorship oppotunities
        p.info-description Sponsor the Awards benefit directly from the event's promotional activities in return.
        p.info-inquiry
          strong Have gotten any inquiry?
        b-button(squared) info@purpleswan.io &nbsp;
          fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionInfo',
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.wrapper-info
  background-color: white
  text-align: center
  .wrapper-info-inner
    .info-header
      padding: 50px 0
      .info-heading
        color: #cec230
        font-size: 30px
      .info-description
      .info-inquiry
        padding-top: 10px
      button
        background-color: #cec230
        border-color: #cec230
</style>
