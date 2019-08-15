<template lang="pug">
  div.page-nominate
    div.inner
      section
        NominatorStatus
      section
        NominatorInfo
      section
        NomineeStatus
</template>
<script>
import NominatorStatus from '~/components/nominate/NominatorStatus'
import NominatorInfo from '~/components/nominate/NominatorInfo'
import NomineeStatus from '~/components/nominate/NomineeStatus'
export default {
  components: {
    NominatorStatus,
    NominatorInfo,
    NomineeStatus
  },
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.page-nominate
  background-color: #f4f4f4
  min-height: 300px
  .inner
    section
      margin: 3em 0
</style>
