<template lang="pug">
  div.page-index
    section.section-menu
      Menu
    section.section-header
      SectionHeader
    section.section-logo
      SectionLogo
    section.section-intro
      SectionIntro
    section.section-selectionprocess
      SectionSelectionProcess
    section.section-schedule
      SectionSchedule
    section.section-awardcategory
      SectionAwardCategory
    section.section-judges(v-if="false")
      SectionJudges
    section.section-sponsors(v-if="false")
      SectionSponsors
    section.section-partners
      SectionPartners
    section.section-venue
      SectionVenue
    section.section-footer
      SectionFooter
</template>

<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/home/SectionHeader'
import SectionLogo from '~/components/home/SectionLogo'
import SectionIntro from '~/components/home/SectionIntro'
import SectionSelectionProcess from '~/components/home/SectionSelectionProcess'
import SectionSchedule from '~/components/home/SectionSchedule'
import SectionAwardCategory from '~/components/home/SectionAwardCategory'
import SectionJudges from '~/components/home/SectionJudges'
import SectionSponsors from '~/components/home/SectionSponsors'
import SectionPartners from '~/components/home/SectionPartners'
import SectionVenue from '~/components/home/SectionVenue'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionLogo,
    SectionIntro,
    SectionSelectionProcess,
    SectionSchedule,
    SectionAwardCategory,
    SectionJudges,
    SectionSponsors,
    SectionPartners,
    SectionVenue,
    SectionFooter
  }
}
</script>
