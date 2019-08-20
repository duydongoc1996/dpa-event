<template lang="pug">
  div.wrapper-award
    div.gradient-background
      div.wrapper-award-inner
        div.award-header
          p.award-heading
            strong {{ $t('homePage.awards.heading') }}
          p.award-description {{ $t('homePage.awards.description') }}
        div.award-list
          b-container(fluid)
            b-row.seven-cols
              b-col.col-md-1(
                v-for="(x, index) in listCategory"
                v-if="x.name.toLowerCase() !== 'others'"
              )
                div.item
                  b-img(
                    fluid
                    :src="'/image/Asset ' + (index + 1) + '.png'"
                  )
                  p
                    strong {{ x.name }}
        div.award-btn-container
          nuxt-link(to="/nominate")
            div.white-button
              strong {{ $t('homePage.awards.nominate') }} &nbsp;
              fa(icon="arrow-right")
          nuxt-link(
            to="/vote"
            v-if="false"
          )
            div.white-button
              strong {{ $t('homePage.awards.vote') }} &nbsp;
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
      url: process.env.baseUrl + '/api/nominate/categories'
    }).then((res) => {
      this.listCategory = res.data.filter(x => x.level === 1)
    })
  }
}
</script>

<style lang="sass">
.wrapper-award
  position: relative
  background-image: url('/image/award-background.png')
  background-repeat: no-repeat
  background-size: cover
  width: 100%
  .gradient-background
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
      background-color: rgba(0, 0, 0, 0.2)
      padding: 3em 0
      border-radius: 1em
      .seven-cols
        color: white
        .col-md-1
          flex: 0 0 14.285714285714285714285714285714%
          max-width: unset
          padding: 0 5px
        @media only screen and (max-width: 992px)
          .col-md-1
            flex: 0 0 50%
            max-width: unset
            padding: 0 5px
    .award-btn-container
      margin-top: 2em
      .white-button
        width: 250px
        margin-left: 10px
        border-radius: 0
</style>
