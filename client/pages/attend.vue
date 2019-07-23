<template lang="pug">
  div.page-attend
    section.section-menu
      Menu
    section.section-header
      SectionHeader
    section.section-invitation-code(
      v-if="!viewForm"
    )
      SectionInvitationCode(
        :code.sync="code"
        @update:code="changeViewForm"
      )
    section.section-attend-form(
      v-if="viewForm"
    )
      SectionAttendForm(
        :code.sync="code"
      )
    section.section-submit-success
    section.section-footer
      SectionFooter
</template>
<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/attend/SectionHeader'
import SectionInvitationCode from '~/components/attend/SectionInvitationCode'
import SectionAttendForm from '~/components/attend/SectionAttendForm'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionFooter,
    SectionInvitationCode,
    SectionAttendForm
  },
  data() {
    return {
      code: 'null',
      viewForm: false
    }
  },
  methods: {
    changeViewForm() {
      this.viewForm = true
    }
  }
}
</script>
<style <style lang="sass" scoped>

</style>
