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
    section.section-sponsors
    section.section-partners
    section.section-venue
    section.section-footer
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import SectionLogo from '~/components/SectionLogo'
import SectionIntro from '~/components/SectionIntro'
import SectionSchedule from '~/components/SectionSchedule'
import SectionAwardCategory from '~/components/SectionAwardCategory'
export default {
  components: {
    SectionHeader,
    SectionLogo,
    SectionIntro,
    SectionSchedule,
    SectionAwardCategory
  }
}
</script>
