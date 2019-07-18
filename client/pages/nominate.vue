<template lang="pug">
  div.page-nominate
    section.section-menu
      Menu
    section.section-header
      SectionHeader
    section.section-voting-form
      SectionForm
    section.section-footer
</template>

<script>
import Menu from '~/components/Menu'
import SectionHeader from '~/components/nominate/SectionHeader'
import SectionForm from '~/components/nominate/SectionForm'
export default {
  components: {
    Menu,
    SectionHeader,
    SectionForm
  },
  data() {
    return {}
  }
}
</script>
