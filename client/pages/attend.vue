<template lang="pug">
  div.page-attend
    section.section-menu
      Menu
    section.section-header
      SectionHeader
    //- section.section-invitation-code(
    //-   v-if="!viewForm && !submitted"
    //- )
    //-   SectionInvitationCode(
    //-     :code.sync="code"
    //-     @update:code="changeViewForm"
    //-   )
    //- section.section-attend-form(
    //-   v-if="viewForm && !submitted"
    //- )
    //-   SectionAttendForm(
    //-     :code.sync="code"
    //-     :submitted.sync="submitted"
    //-     @update:submitted="changeViewSubmit"
    //-   )
    //- section.section-submit-success(
    //-   v-if="submitted"
    //- )
    //-   SectionSubmitSuccess
    section.section-footer
      SectionFooter
</template>
<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/attend/SectionHeader'
import SectionInvitationCode from '~/components/attend/SectionInvitationCode'
import SectionAttendForm from '~/components/attend/SectionAttendForm'
import SectionSubmitSuccess from '~/components/attend/SectionSubmitSuccess'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionFooter,
    SectionInvitationCode,
    SectionAttendForm,
    SectionSubmitSuccess
  },
  data() {
    return {
      code: 'null',
      viewForm: false,
      submitted: false
    }
  },
  methods: {
    changeViewForm() {
      this.viewForm = true
    },
    changeViewSubmit() {
      this.submitted = true
    }
  }
}
</script>
<style <style lang="sass" scoped>

</style>
