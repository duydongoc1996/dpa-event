<template lang="pug">
  div.nominee-status
    div.inner
      div.body
        div.status
          div.header
            p
              strong Nominee's Status
          div.item
            p.text number of the moninees
            p.number {{ count }}
        div.nationality
          div.header
            p
            strong Nationality of nominees
          b-container.no-padding(fluid)
            b-row()
              b-col.col-item(cols="3" v-for="x in 10")
                div.item
                  p.text Korea
                  p.number 10
</template>
<script>
export default {
  name: 'NomineeStatus',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/nominate/count/nominee',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.token,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      this.$log.debug(response.data)
      if (response.data.count !== null) {
        this.count = response.data.count
      }
    })
  }
}
</script>
<style lang="sass" scoped>
.no-padding
  padding: 0
.nominee-status
  .inner
    .body
      .status
        .item
          background-color: white
          border-radius: 1em
          padding: 1em
          p
            margin: 0
          .number
            color: #d1c531
            font-size: 30px
      .nationality
        margin: 3em 0
        .col-item
          margin: 0.5em 0
          padding: 0 0.5em
          .item
            background-color: white
            border-radius: 1em
            padding: 1em
            p
              margin: 0
            .number
              color: #d1c531
              font-size: 30px
</style>
