<template lang="pug">
  div.page-wrapper
    div.page-index
</template>
<script>
export default {
  components: {
  },
  data() {
    return {}
  },
  mounted() {
    if (!sessionStorage.token) {
      window.location.href = '/login'
      return
    }
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.token
      }
    }).then((res) => {
      if (!res.data.success) {
        window.location.href = '/login'
      }
    }).catch(err => this.$log.debug(err))
  }
}
</script>
<style lang="sass">
.page-wrapper
  .page-index
    h1
      text-align: center
</style>
