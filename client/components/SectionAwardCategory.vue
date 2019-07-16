<template lang="pug">
  div.wrapper-award
    div.wrapper-award-inner
      div.award-header
        p.award-heading AWARDS CATEGORY
        p.award-description All fo the winners of prize winners will be granted the exclusive rights to use the DPA marks on their marketing materials such as websites, publications, products and so on.
      div.award-list
        b-row()
          b-col.award-item(
            sm="4"
            v-for="x in 11"
          )
            div.award-item-container
              div.award-decoration-left
              div.award-detail
                p.award-name Best in ICO
                p.award-description test test
              div.award-decoration-right
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
  background-image: url('https://picsum.photos/1024/480/?image=15')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  .wrapper-award-inner
    margin: 0 auto
    width: 992px
    text-align: center
    padding: 50px 0
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
          .award-detail
            .award-name
              color: #cec230
            .award-description
              color: white
              margin: 0
          .award-decoration-left
          .award-decoration-right
    .award-btn-container
      button
        margin: 20px
</style>
