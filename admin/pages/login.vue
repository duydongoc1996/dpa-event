<template lang="pug">
  div.page-login
    b-form(
      @submit="onSubmit"
    )
      b-form-group(
        label="Username"
        label-for="username"
      )
        b-form-input(
          id="username"
          type="text"
          required
          v-model="form.username"
        )
      b-form-group(
        label="Password"
        label-for="password"
      )
        b-form-input(
          id="password"
          type="password"
          required
          v-model="form.password"
        )
      b-button(
        type="submit"
        variant="primary"
        block
      ) Login
</template>
<script>
export default {
  layout: 'Login',
  data() {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$log.debug(JSON.stringify(this.form))
      this.$axios({
        url: process.env.baseUrl + '/login',
        method: 'post',
        data: JSON.stringify(this.form),
        headers: {
          'content-type': 'application/json'
        }
      }).then((res) => {
        this.$log.info(res.data)
        if (res.data.success) sessionStorage.setItem('token', res.data.token)
        window.location.href = '/'
      }).catch((err) => {
        this.$log.error(err)
      })
    }
  }
}
</script>
<style lang="sass">
.page-login
  width: 400px
  margin: 200px auto
  padding: 20px
</style>
