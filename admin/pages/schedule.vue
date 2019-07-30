<template lang="pug">
  div.page-schedule
    h1 &gt;&gt; Schedule &lt;&lt;
    hr
    b-container(fluid)
      b-row
        b-col(cols="12")
          div
            h3 List schedule
            div.table-schedule
              b-table(
                striped
                hover
                :items="schedules"
              )
            hr
        b-col(cols="4")
          Create
          hr
        b-col(cols="4")
          Delete
          hr
        b-col(cols="4")
          Order
          hr
</template>

<script>
import Create from '~/components/schedule/Create'
import Delete from '~/components/schedule/Delete'
import Order from '~/components/schedule/Order'
export default {
  components: {
    Create,
    Delete,
    Order
  },
  data() {
    return {
      schedules: null
    }
  },
  mounted() {
    // Get list schedule
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/schedules'
    }).then((res) => {
      this.schedules = res.data
    }).catch(err => this.$log.debug(err))
  }
}
</script>

<style lang="sass">
.page-schedule
  h1
    text-align: center
</style>
