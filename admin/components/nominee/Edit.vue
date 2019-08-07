<template lang="pug">
  div.nominee-edit
    h2 Edit nominee
    hr
    b-form(
      v-if="form !== null"
      @submit="onSubmit"
      @reset="onReset"
    )
      p Nominee ID: {{ form.id }}
      p Avatar:
        b-img(
          :src="imgSrc + form.avatar"
          fluid
        )
      p Prefix:
        b-input(
          v-model="form.prefix"
        )
      p First name:
        b-input(
          v-model="form.first_name"
        )
      p Last name:
        b-input(
          v-model="form.last_name"
        )
      p Phone:
        b-input(
          v-model="form.phone"
        )
      p Email:
        b-input(
          v-model="form.email"
        )
      p Company Name:
        b-input(
          v-model="form.company_name"
        )
      p Company Website:
        b-input(
          v-model="form.company_website"
        )
      p Job Title:
        b-input(
          v-model="form.job_title"
        )
      p Nationality:
        b-input(
          v-model="form.nationality"
        )
      p Category ID: {{ form.fk_award_category }}
      p Other category: {{ form.other_category }}
      p Description:
        b-textarea(
          v-model="form.about_speaker"
          rows="3"
        )
      p Links media:
        b-input(
          v-model="form.links_media"
        )
      b-button(
        type="reset"
        block
        variant="danger"
      ) Cancel
      b-button(
        type="submit"
        block
        variant="success"
      ) Save
</template>
<script>
export default {
  name: 'Edit',
  props: {
    form: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      imgSrc: process.env.baseUrl + '/static/'
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/nominate/nominee/update',
        data: JSON.stringify(this.form),
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        }
      }).then((res) => {
        if (!alert(res.data.message)) window.location.reload()
      }).catch(err => this.$log.debug(err))
    },
    onReset(e) {
      e.preventDefault()
      this.form = null
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
