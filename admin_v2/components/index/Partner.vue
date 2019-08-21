<template lang="pug">
  div.partner
    div.inner
      div.header
        p
          strong Partners
      div.body
        b-form(@submit="onSubmit")
          b-form-group(label="Company name")
            b-form-input(
              v-model="form.company_name"
              required
            )
          b-form-group(label="Company logo")
            b-form-file(
              v-model="form.logo"
              required
            )
          div.center
            b-button(
              type="submit"
              variant="light"
              squared
            ) ADD PARTNER
</template>
<script>
export default {
  name: 'Partner',
  data() {
    return {
      form: {
        company_name: null,
        logo: null
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const formBody = new FormData()
      formBody.set('company_name', this.form.company_name)
      formBody.append('image', this.form.logo)
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/partner/create',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'content-type': 'multipart/form-data'
        },
        data: formBody
      }).then((response) => {
        this.$log.debug(response.data)
        if (!alert(response.data.message)) { window.location.reload() }
      }).catch(err => this.$log.debug(err))
    }
  }

}
</script>
<style lang="sass" scoped>
.partner
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
