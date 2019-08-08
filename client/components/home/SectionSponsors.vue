<template lang="pug">
  div.wrapper-sponsers
    div.wrapper-sponsor-inner
      div.spo-header
        p.spo-heading
          strong {{ $t('homePage.sponsors.heading') }}
      div.spo-body
        b-container(fluid)
          b-row(
          )
            b-col.spo-item-container(
              sm="6"
              md="4"
              lg="3"
              v-for="x in 8"
              :key="x"
            )
              div.spo-item
                div.spo-logo
                  b-img(src="~/assets/delegacy.png", alt="alt")
</template>
<script>
export default {
  name: 'SectionSponsors',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.wrapper-sponsers
  background-color: white
  width: 100%
  .wrapper-sponsor-inner
    padding: 50px 0
    width: 992px
    @media only screen and (max-width: 992px)
      width: 100%
    margin: auto
    .spo-header
      text-align: center
      .spo-heading
        color: #cec230
        font-size: 30px
    .spo-body
      .spo-item-container
        padding: 10px
        .spo-item
          border: 1px solid #2c2c2c
          .spo-logo
            text-align: center
            padding: 10px
            img
</style>
