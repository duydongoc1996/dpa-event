<template lang="pug">
div.sponsorship-wrapper
  div.sponsorship-info
    div.inner
      div.header
        p
          strong Sponsorship application info
      div.body
        b-container.no-padding(fluid)
          b-row
            b-col.col-item(cols="3" v-for="x in 4" :key="x")
              div.item
                p.text Korea
                p.number 10
  div.sponsorship-data
    div.inner
      div.body
        div.header
          p
            strong Sponsorship application data management
        div.body
          p Gold Sponsorship
            DropdownUpdate(
              target="gold-sponsorship"
            )
</template>
<script>
import DropdownUpdate from '~/components/sponsorship/DropdownUpdate'
export default {
  name: 'SponsorshipInfo',
  components: {
    DropdownUpdate
  },
  data() {
    return {
      sponsors: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/sponsors',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.data.success === false) {
        this.$log.debug(response.data.message)
      } else {
        this.sponsors = response.data
      }
    })
  }
}
</script>
<style lang="sass" scoped>
.sponsorship-info
  .inner
    .body
      .no-padding
        padding: 0
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
