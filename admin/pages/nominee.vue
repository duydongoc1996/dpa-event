<template lang="pug">
  div.page-nominee
    h1 &gt;&gt; Nominee &lt;&lt;
    hr
    b-container(fluid)
      b-row
        b-col(cols="8")
          List(
            :editId="editId"
            @update:editId="editRow"
          )
        b-col(cols="4")
          Edit(
            :form="editData"
          )
</template>
<script>
import List from '~/components/nominee/List'
import Edit from '~/components/nominee/Edit'
export default {
  components: {
    List,
    Edit
  },
  data() {
    return {
      editId: null,
      editData: null
    }
  },
  methods: {
    editRow(e) {
      this.editData = Object.assign({}, e)
      // this.$log.debug(this.editData)
    }
  }
}
</script>

<style lang="sass" scoped>
.page-nominee
  h1
    text-align: center

</style>
