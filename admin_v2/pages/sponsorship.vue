<template lang="pug">
  div.page-sponsorship
    div.inner
      section
        SponsorshipInfo
      section
</template>
<script>
import SponsorshipInfo from '~/components/sponsorship/SponsorshipInfo'
export default {
  components: {
    SponsorshipInfo
  },
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.page-sponsorship
  background-color: #f4f4f4
  min-height: 300px
  .inner
    section
      margin: 3em 0
</style>
