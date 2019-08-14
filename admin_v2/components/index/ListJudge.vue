<template lang="pug">
  div.list-judge
    div.inner
      div.header
      div.body
        div.judge-item(v-for="(x, index) in judges")
          div.left
            span {{ x.name + ' (' + x.job_title + ' / ' + x.company + ') ' }}
          div.right
            b-button.round-icon(
              @click="remove(x.id, index)"
            )
              fa(icon="trash-alt")
            b-button.round-icon(
              v-b-toggle="`updatejudge-${index}`"
            )
              fa(icon="cog")
          b-collapse(
            :id="'updatejudge-' + index"
          )
            b-form
              b-form-group(label="Name")
                b-form-input(v-model="x.name")
              b-form-group(label="Job title")
                b-form-input(v-model="x.job_title")
              b-form-group(label="Organization/association/company name")
                b-form-input(v-model="x.company")
              div.save-btn
                b-button(
                  squared
                  variant="success"
                  @click="updateJudge(x)"
                ) Save
        div.more-btn
          b-button(
            squared
            variant="light"
          ) MORE

</template>
<script>
export default {
  name: 'ListJudge',
  data() {
    return {
      judges: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/judges'
    }).then((response) => {
      if (response.data.length === 0) {
        this.judges = []
      } else {
        response.data.forEach((element) => {
          this.judges.push(element)
        })
        this.$log.debug(this.judges)
      }
    })
  },
  methods: {
    remove(id, index) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/judge/remove/' + id,
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (!alert(response.data.message)) {
          this.judges.splice(index, 1)
        }
      }).catch(err => this.$log.debug(err))
    },
    updateJudge(judge) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/judge/update',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(judge)
      }).then((response) => {
        if (!alert(response.data.message)) {}
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>
.list-judge
  .inner
    .header
    .body
      position: relative
      .judge-item
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
      .more-btn
        text-align: center
        .btn
          padding: .5em 4em
          background-color: white
          border: 1px solid grey
</style>
