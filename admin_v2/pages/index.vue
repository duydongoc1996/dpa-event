<template lang="pug">
  div.page-index
    div.inner
      section
        EventInformation
      section
        Schedule
      section
        Nominee
      section
        ListNominee
      section
        Judge
      section
        ListJudge
      section
        Sponsor
      section
        ListSponsor
      section
        Partner
      section
        ListPartner
</template>
<script>
import EventInformation from '~/components/index/EventInformation'
import Schedule from '~/components/index/Schedule'
import Nominee from '~/components/index/Nominee'
import ListNominee from '~/components/index/ListNominee'
import Judge from '~/components/index/Judge'
import ListJudge from '~/components/index/ListJudge'
import Sponsor from '~/components/index/Sponsor'
import ListSponsor from '~/components/index/ListSponsor'
import Partner from '~/components/index/Partner'
import ListPartner from '~/components/index/ListPartner'
export default {
  components: {
    EventInformation,
    Schedule,
    Nominee,
    ListNominee,
    Judge,
    ListJudge,
    Sponsor,
    ListSponsor,
    Partner,
    ListPartner
  },
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.page-index
  background-color: #f4f4f4
  min-height: 300px
  .inner
    section
      margin: 3em 0
</style>
