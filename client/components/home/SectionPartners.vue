<template lang="pug">
  div.wrapper-partners
    div.wrapper-partner-inner
      div.part-header
        p.part-heading
          strong {{ $t('homePage.partners.heading') }}
      div.part-body
        b-container(fluid)
          b-row(
          )
            b-col.part-item-container(
              cols="12"
              sm="12"
              md="4"
              lg="4"
              v-for="(x, index) in partners"
              :key="index"
            )
              div.part-item
                div.part-logo
                  b-img(
                    :src="imageAddress + x.logo"
                    alt="alt"
                    fluid-grow
                    center
                  )
</template>
<script>
export default {
  name: 'SectionPartners',
  data() {
    return {
      partners: [],
      imageAddress: process.env.baseUrl + '/static/'
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/partners'
    }).then((response) => {
      if (response.data.success !== false) {
        this.partners = response.data
        this.$log.debug(this.partners)
      }
    })
  }
}
</script>

<style lang="sass">
.wrapper-partners
  background-color: #f4f4f4
  width: 100%
  .wrapper-partner-inner
    padding: 50px 0
    width: 992px
    @media only screen and (max-width: 992px)
      width: 100%
    margin: auto
    .part-header
      text-align: center
      .part-heading
        color: #cec230
        font-size: 30px
    .part-body
      position: relative
      .part-item-container
        height: 150px
        border: 1px solid #f4f4f4
        .part-item
          height: 100%
          .part-logo
            height: 100%
            text-align: center
            padding: 10px
            display: flex
            align-items: center
            justify-content: center
            img
              max-width: 300px
</style>
