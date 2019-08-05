<template lang="pug">
  div.page
    section.section-menu
      Menu
    section.section-header
      SectionHeader
</template>
<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/vote/SectionHeader'
export default {
  components: {
    Menu,
    SectionHeader
  },
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>

</style>
