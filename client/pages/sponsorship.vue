<template lang="pug">
  div.page-sponsorship
    section.section-menu
      Menu
    //- section.section-header
    //-   SectionHeader
    //- div(
    //-   v-if="!showSubmit"
    //- )
    //-   section.section-info
    //-     SectionInfo
    //-   section.section-price-table(
    //-     v-if="!showSelection"
    //-   )
    //-     SectionPriceTable(
    //-       :checked.sync="sponsorType"
    //-       @update:checked="changeView"
    //-     )
    //-   section.section-sponsorship-form(
    //-     v-if="showSelection"
    //-   )
    //-     SectionSponsorshipForm(
    //-       @update:submitted="changeSubmitView"
    //-       :sponsorshipType="sponsorType"
    //-     )
    //- section.section-submit-success(
    //-   v-if="showSubmit"
    //- )
    //-   SectionSubmitSuccess
    section.section-footer
      SectionFooter
</template>
<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/sponsorship/SectionHeader'
import SectionInfo from '~/components/sponsorship/SectionInfo'
import SectionPriceTable from '~/components/sponsorship/SectionPriceTable'
import SectionPriceSelection from '~/components/sponsorship/SectionPriceSelection'
import SectionSponsorshipForm from '~/components/sponsorship/SectionSponsorshipForm'
import SectionSubmitSuccess from '~/components/sponsorship/SectionSubmitSuccess'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionInfo,
    SectionPriceTable,
    SectionPriceSelection,
    SectionSponsorshipForm,
    SectionSubmitSuccess,
    SectionFooter
  },
  data() {
    return {
      sponsorType: null,
      showSelection: false,
      showSubmit: false
    }
  },
  methods: {
    changeView() {
      this.showSelection = true
    },
    changeSubmitView() {
      this.showSubmit = true
    }
  }
}
</script>
<style lang="sass">
.page-sponsorship
  background-color: white
</style>
