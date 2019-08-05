<template lang="pug">
  div.page-nominate
    section.section-menu
      Menu
    section.section-header
      SectionHeader
    section.section-voting-form(
      v-if="!submitted"
    )
      SectionForm(
        :submitted.sync="submitted"
        @update:submitted="changeViewSubmit"
      )
    section.section-submit-success(
      v-if="submitted"
    )
      SectionSubmitSuccess
    section.section-footer
      SectionFooter
</template>

<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/nominate/SectionHeader'
import SectionForm from '~/components/nominate/SectionForm'
import SectionSubmitSuccess from '~/components/nominate/SectionSubmitSuccess'
import SectionFooter from '~/components/SectionFooter'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionForm,
    SectionSubmitSuccess,
    SectionFooter
  },
  data() {
    return {
      submitted: false
    }
  },
  methods: {
    changeViewSubmit() {
      this.submitted = true
    }
  }
}
</script>
