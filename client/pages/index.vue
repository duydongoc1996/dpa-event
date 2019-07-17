<template lang="pug">
  div.page-index
    section.section-header
      SectionHeader
    section.section-logo
      SectionLogo
    section.section-intro
      SectionIntro
    section.section-schedule
      SectionSchedule
    section.section-awardcategory
      SectionAwardCategory
    section.section-judges
      SectionJudges
    section.section-sponsors
      SectionSponsors
    section.section-partners
      SectionPartners
    section.section-venue
      SectionVenue
    section.section-footer
      SectionFooter
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import SectionLogo from '~/components/SectionLogo'
import SectionIntro from '~/components/SectionIntro'
import SectionSchedule from '~/components/SectionSchedule'
import SectionAwardCategory from '~/components/SectionAwardCategory'
import SectionJudges from '~/components/SectionJudges'
import SectionSponsors from '~/components/SectionSponsors'
import SectionPartners from '~/components/SectionPartners'
import SectionVenue from '~/components/SectionVenue'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    SectionHeader,
    SectionLogo,
    SectionIntro,
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
