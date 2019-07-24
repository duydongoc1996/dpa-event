<template lang="pug">
  div.wrapper-partners
    div.wrapper-partner-inner
      div.part-header
        p.part-heading
          strong PARTNERS
      div.part-body
        b-container(fluid)
          b-row(
          )
            b-col.part-item-container(
              sm="6"
              md="4"
              lg="3"
              v-for="x in 8"
              :key="x"
            )
              div.part-item
                div.part-logo
                  b-img(src="~/assets/kchain.png", alt="alt")
</template>
<script>
export default {
  name: 'SectionPartners',
  data() {
    return {}
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
      .part-item-container
        padding: 10px
        .part-item
          border: 1px solid #2c2c2c
          .part-logo
            text-align: center
            padding: 10px
            img
</style>
