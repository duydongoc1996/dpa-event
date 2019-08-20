<template lang="pug">
  div.page
    section.section-menu
      Menu
    //- section.section-header
    //-   SectionHeader
    //- section.section-sms
    //-   SectionSmsVerification
    //- section.section-list-members
    //-   SectionListMembers
    section.section-footer
      SectionFooter
</template>
<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/vote/SectionHeader'
import SectionSmsVerification from '~/components/vote/SectionSmsVerification'
import SectionListMembers from '~/components/vote/SectionListMembers'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionSmsVerification,
    SectionListMembers,
    SectionFooter
  },
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.section-list-members
  background: #fff !important
</style>
