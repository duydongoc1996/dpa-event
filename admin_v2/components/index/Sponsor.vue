<template lang="pug">
  div.sponsor
    div.inner
      div.header
        p
          strong Sponsors
      div.body
        b-form(@submit="onSubmit")
          b-form-group(label="Company Name")
            b-form-input(
              v-model="form.company_name"
              required
            )
          b-form-group(label="Sponsorship category")
            b-form-input(
              v-model="form.type"
              required
            )
          b-form-group(label="Upload company logo file")
            b-form-file(
              v-model="form.image"
              required
            )
          div.center
            b-button(
              type="submit"
              variant="light"
              squared
            ) ADD SPONSOR
</template>

<script>
export default {
  name: 'Sponsor',
  data() {
    return {
      form: {
        company_name: null,
        type: null,
        image: null
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const formBody = new FormData()
      formBody.set('type', this.form.type)
      formBody.set('company_name', this.form.company_name)
      formBody.append('image', this.form.image)
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/sponsor/create',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'content-type': 'multipart/form-data'
        },
        data: formBody
      }).then((response) => {
        if (!alert(response.data.message)) {
          window.location.reload()
        }
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>
.sponsor
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
