<template lang="pug">
  div.page-nominee
    h1 &gt;&gt; Nominee &lt;&lt;
    hr
    b-container(fluid)
      b-row
        b-col
          List
</template>
<script>
import List from '~/components/nominee/List'
export default {
  components: {
    List
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
.page-nominee
  h1
    text-align: center

</style>
