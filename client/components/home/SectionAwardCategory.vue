<template lang="pug">
  div.wrapper-award
    div.gradient-background
      div.wrapper-award-inner
        div.award-header
          p.award-heading
            strong AWARDS CATEGORY
          p.award-description All of the winners will be granted the exclusive right to use the DPA mark on their marketing materials such as websites, publications, products and so on.
        div.award-list
          b-container(fluid)
            b-row()
              b-col.award-item(
                sm="6"
                md="6"
                lg="4"
                v-for="x in listCategory"
                :key="x.id"
              )
                div.award-item-container
                  div.award-decoration-left
                    b-img(src="~/assets/award-decoration-left.png")
                  div.award-detail
                    p.award-name
                      strong {{ x.name }}
                    p.award-description {{ x.description }}
                  div.award-decoration-right
                    b-img(src="~/assets/award-decoration-right.png")
        div.award-btn-container
          nuxt-link(to="/nominate")
            div.white-button
              strong NOMINATE &nbsp;
              fa(icon="arrow-right")
          nuxt-link(
            to="/vote"
            v-if="false"
          )
            div.white-button
              strong VOTE &nbsp;
              fa(icon="arrow-right")
</template>

<script>
export default {
  name: 'SectionAwardCategory',
  data() {
    return {
      listCategory: null
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/nominate/categories'
    }).then((res) => {
      this.listCategory = res.data.filter(x => x.level === 1)
    })
  }
}
</script>

<style lang="sass">
.wrapper-award
  position: relative
  background-image: url('~assets/3.png')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  .gradient-background
    background-color: rgba(0,0,0,0.5)
    width: 100%
    height: 100%
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
      text-align: center
      .award-heading
        color: #cec230
        font-size: 30px
      .award-description
        margin: 0 auto
        color: white
        max-width: 40em
        margin-bottom: 50px
    .award-list
      .award-item
        padding: 5px
        .award-item-container
          background-color: rgba(1,1,1,0.4)
          padding: 20px 0
          height: 160px
          border-radius: 10px
          .award-detail
            display: block
            float: left
            height: fit-content
            width: 60%
            padding-top: 30px
            .award-name
              color: #cec230
              font-family: FrankRuhLibre
              font-size: 20px
              margin: 0
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
      .white-button
        width: 200px
        margin-left: 10px
        border-radius: 0
</style>
