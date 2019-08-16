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
              b-col.col-item(cols="3" v-for="(x, index) in country" :key="index")
                div.item
                  p.text {{ index }}
                  p.number {{ x }}
</template>
<script>
export default {
  name: 'NomineeStatus',
  data() {
    return {
      count: 0,
      nominees: [],
      country: {}
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
      if (response.data.count !== null) {
        this.count = response.data.count
      }
    })

    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/nominate/nominees',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.token,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.data.length > 0) {
        this.nominees = response.data
        this.country = this.nominees.reduce((y, x) => {
          if (y[x.nationality] === undefined) {
            y[x.nationality] = 1
          } else {
            y[x.nationality]++
          }
          return y
        }, {})
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
