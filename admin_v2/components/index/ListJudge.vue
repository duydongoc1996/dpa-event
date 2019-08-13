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
              @click="edit(x.id, index)"
            )
              fa(icon="cog")
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
        this.judges.splice(index, 1)
      }).catch(err => this.$log.debug(err))
    },
    edit(id, index) {
    }
  }
}
</script>
<style lang="sass" scoped>
.list-judge
  .inner
    .header
    .body
      .judge-item
        margin: 1em 0
        background-color: white
        padding: 20px 20px
        height: 80px
        border-radius: 10px
        .left
          float: left
        .right
          float: right
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
