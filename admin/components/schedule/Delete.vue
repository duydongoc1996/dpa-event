<template lang="pug">
  div
    h3 Delete schedule
    b-form(
      @submit="onSubmit"
    )
      b-form-group(
        label="Schedule ID"
        label-for="id"
      )
        b-form-input(
          id="id"
          type="text"
          required
          v-model="id"
        )
      b-button(
        type="submit"
        squared
        block
        variant="outline-danger"
      ) Submit
</template>
<script>
export default {
  name: 'Delete',
  data() {
    return {
      id: null
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/schedule/remove/' + this.id,
        headers: {
          Authorization: 'Bearer ' + localStorage.token
        }
      }).then((res) => {
        if (!alert(res.data.message)) window.location.reload()
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
