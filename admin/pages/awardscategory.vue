<template lang="pug">
  div.page-schedule
    h1 &gt;&gt; Awards Category &lt;&lt;
    hr
    b-container(fluid)
      b-row
        b-col(cols="12")
          div
            h3 List Awards Category
            b-table(
                striped
                hover
                :items="categories"
              )
            hr
        b-col(cols="4")
          Create
          hr
        b-col(cols="4")
          Delete
          hr
</template>
<script>
import Create from '~/components/category/Create'
import Delete from '~/components/category/Delete'
export default {
  components: {
    Create,
    Delete
  },
  data() {
    return {
      categories: null
    }
  },
  created() {
    // Get list schedule
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/nominate/categories'
    }).then((res) => {
      this.categories = res.data
    }).catch(err => this.$log.debug(err))
  }
}
</script>
<style lang="sass">

</style>
