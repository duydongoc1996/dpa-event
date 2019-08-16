<template lang="pug">
  div.judge
    div.inner
      div.header
        p
          strong Judges
      div.body
        b-form(@submit="onSubmit")
          b-form-group(label="Name")
            b-form-input(v-model="form.name" required)
          b-form-group(label="Job title")
            b-form-input(v-model="form.job_title" required)
          b-form-group(label="Organization/association/company name")
            b-form-input(v-model="form.company" required)
          b-form-group(label="Headshot image file of the judge")
            b-form-file(v-model="form.image" required)
          div.center
            b-button(
              type="submit"
              variant="light"
              squared
            ) ADD JUDGE
</template>
<script>
export default {
  name: 'Judge',
  data() {
    return {
      form: {
        name: null,
        job_title: null,
        company: null,
        image: null
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      const formBody = new FormData()
      formBody.set('name', this.form.name)
      formBody.set('job_title', this.form.job_title)
      formBody.set('company', this.form.company)
      formBody.append('image', this.form.image)
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/judge/create',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'content-type': 'multipart/form-data'
        },
        data: formBody
      }).then((response) => {
        if (!alert(response.data.message)) window.location.reload()
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>
.judge
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
