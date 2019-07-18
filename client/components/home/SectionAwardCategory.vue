<template lang="pug">
  div.wrapper-award
    div.wrapper-award-inner
      div.award-header
        p.award-heading AWARDS CATEGORY
        p.award-description All fo the winners of prize winners will be granted the exclusive rights to use the DPA marks on their marketing materials such as websites, publications, products and so on.
      div.award-list
        b-container(fluid)
          b-row()
            b-col.award-item(
              sm="6"
              md="6"
              lg="4"
              v-for="x in 11"
              :key="x"
            )
              div.award-item-container
                div.award-decoration-left
                  b-img(src="~/assets/award-decoration-left.png")
                div.award-detail
                  p.award-name Best in ICO
                  p.award-description test test
                div.award-decoration-right
                  b-img(src="~/assets/award-decoration-right.png")
      div.award-btn-container
        b-button(squared variant="outline-light") NOMINATE &nbsp;
          fa(icon="arrow-right")
        b-button(squared variant="outline-light") VOTE &nbsp;
          fa(icon="arrow-right")

</template>

<script>
export default {
  name: 'SectionAwardCategory',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.wrapper-award
  background-image: url('~assets/3.png')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  .wrapper-award-inner
    margin: 0 auto
    width: 992px
    @media only screen and (max-width: 992px)
      width: 80%
    @media only screen and (max-width: 768px)
      width: 90%
    text-align: center
    padding: 100px 0
    .award-header
      .award-heading
        color: #cec230
        font-size: 30px
      .award-description
        color: white
    .award-list
      .award-item
        padding: 5px
        .award-item-container
          background-color: rgba(1,1,1,0.4)
          padding: 20px 0
          height: 160px
          .award-detail
            display: block
            float: left
            height: fit-content
            width: 60%
            .award-name
              color: #cec230
            .award-description
              color: white
              margin: 0
          .award-decoration-left
            display: block
            float: left
            height: fit-content
            width: 20%
          .award-decoration-right
            display: block
            float: left
            height: fit-content
            width: 20%
    .award-btn-container
      button
        margin: 20px
        width: 200px
</style>
