<template lang="pug">
  div.list-sponsor
    div.inner
      div.header
      div.body
        div.sponsor-item(v-for="(x,index) in sponsors")
          div.left
            span {{ x.company_name }}
          div.right
            b-button.round-icon(
              @click="remove(x.id, index)"
            )
              fa(icon="trash-alt")
            b-button.round-icon(
              v-b-toggle="`updatesponsor-${index}`"
            )
              fa(icon="cog")
          div.update
            b-collapse(
              :id="'updatesponsor-' + index"
            )
              b-form
                b-form-group(label="Company name")
                  b-form-input(v-model="x.company_name" required)
                b-form-group(label="Full name")
                  b-form-input(v-model="x.full_name")
                b-form-group(label="Website address")
                  b-form-input(v-model="x.website_address")
                b-form-group(label="Email")
                  b-form-input(v-model="x.email")
                b-form-group(label="Telegram id")
                  b-form-input(v-model="x.telegram_id")
                b-form-group(label="Job title")
                  b-form-input(v-model="x.job_title")
                b-form-group(label="Description")
                  b-form-textarea(v-model="x.description")
                b-form-group(label="Sponsorship category")
                  b-form-input(v-model="x.type" required)
                div.save-btn
                  b-button(
                    squared
                    variant="success"
                    @click="updateSponsor(x)"
                  ) Save
        div.more-btn
          b-button(
            squared
            variant="light"
          ) MORE
</template>
<script>
export default {
  name: 'ListSponsor',
  data() {
    return {
      sponsors: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/sponsors'
    }).then((response) => {
      if (response.data.length === 0) {
        this.sponsors = []
      } else {
        response.data.forEach((element) => {
          this.sponsors.push(element)
        })
        this.$log.debug(this.sponsors)
      }
    })
  },
  methods: {
    remove(id, index) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/sponsor/remove/' + id,
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (!alert(response.data.message)) {
          this.sponsors.splice(index, 1)
        }
      }).catch(err => this.$log.debug(err))
    },
    updateSponsor(sponsor) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/sponsor/update',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(sponsor)
      }).then((response) => {
        if (!alert(response.data.message)) {}
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>
.list-sponsor
  .inner
    .header
    .body
      position: relative
      .sponsor-item
        position: relative
        margin: 1em 0
        background-color: white
        padding: 20px 20px
        border-radius: 10px
        height: fit-content
        .left
          position: relative
        .right
          text-align: right
          position: absolute
          right: 1em
          top: 1em
          .round-icon
            border-radius: 50%
            background-color: grey
            color: white
        .update
          background-color: #f4f4f4
          .collapse
            padding: 1em
            margin-top: 2em
      .more-btn
        text-align: center
        .btn
          padding: .5em 4em
          background-color: white
          border: 1px solid grey
</style>
