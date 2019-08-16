<template lang="pug">
  div.event-information
    div.inner
      div.header
        p
          strong Event information
      div.body
        b-form(@submit="onSubmit")
          b-form-group(
            label="Title"
          )
            b-form-input(v-model="form.title")
          b-form-group(
            label="Date"
          )
            b-form-input(v-model="form.date")
          b-form-group(
            label="Content"
          )
            b-form-textarea(
              rows="5"
              max-rows="10"
              v-model="form.content"
            )
          div.center
            b-button(
              type="submit"
              squared
              variant="warning"
            )
              fa(icon="edit")
              span  EDIT
</template>
<script>
export default {
  name: 'EventInformation',
  data() {
    return {
      form: {
        title: null,
        date: null,
        content: null
      }
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/eventinfo'
    }).then((response) => {
      if (response.data.success === false) {
        this.$log.debug(response.data.message)
      } else {
        this.form = Object.assign({}, response.data)
      }
    })
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/eventinfo/create',
        data: JSON.stringify(this.form),
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        }
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.event-information
  .inner
    .header
    .body
      background-color: white
      border-radius: 1em
      padding: 2em
      .center
        text-align: center
        .btn
          background-color: #d1c531
          border-color: #d1c531
          color: white
</style>
