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
              cols="4"
              sm="4"
              md="4"
              lg="4"
            )
              div.part-item
                div.part-logo
                  b-img(
                    src="~/assets/logo/delegacy logo_03.png"
                    alt="alt"
                    fluid-grow
                    center
                  )
            b-col.part-item-container(
              cols="4"
              sm="4"
              md="4"
              lg="4"
            )
              div.part-item
                div.part-logo
                  b-img(
                    src="~/assets/logo/PUBLISH logo.png"
                    alt="alt"
                    fluid-grow
                    center
                  )
            b-col.part-item-container(
              cols="4"
              sm="4"
              md="4"
              lg="4"
            )
              div.part-item
                div.part-logo
                  b-img(
                    src="~/assets/logo/Kchain logo.png"
                    alt="alt"
                    fluid-grow
                    center
                  )
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
      height: 180px
      position: relative
      .part-item-container
        height: 180px
        border: 1px solid #f4f4f4
        .part-item
          margin: 0
          position: absolute
          top: 50%
          -ms-transform: translateY(-50%)
          transform: translateY(-50%)
          .part-logo
            text-align: center
            padding: 10px
            img
</style>
