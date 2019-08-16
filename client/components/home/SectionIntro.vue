<template lang="pug">
  div.wrapper-intro
    b-container.wrapper-intro-inner(fluid)
      b-row(no-gutters)
        b-col(
          sm="12"
          md="12"
          lg="4"
        )
          div.wrapper-countdown
            div.countdown
              Countdown
        b-col(
          sm="12"
          md="12"
          lg="8"
        )
          div.wrapper-description
            div.wrapper-description-inner
              p.des-heading
                strong DECENTRALIZED PEOPLE'S AWARDS 2019
              p.des-date
                strong {{ $t('homePage.intro.date') }} | 16:00 - 21:00
              p.des-text
                strong Recognition on chain.
              p.des-text {{ $t('homePage.intro.description.p1') }}
              p.des-text {{ $t('homePage.intro.description.p2') }}
              p.des-text {{ $t('homePage.intro.description.p3') }}
              p.des-text {{ $t('homePage.intro.description.p4') }}
              div.wrapper-button
                //- nuxt-link(to="/attend")
                //-   div.yellow-button
                //-     strong {{ $t('homePage.intro.attend') }} &nbsp;
                //-     fa(icon="arrow-right")
                nuxt-link(to="/nominate")
                  div.yellow-button
                    strong {{ $t('homePage.intro.nominate') }} &nbsp;
                    fa(icon="arrow-right")
</template>

<script>
import Countdown from '~/components/home/Countdown'
export default {
  name: 'SectionIntro',
  components: {
    Countdown
  },
  data() {
    return {
      intro: null
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/eventinfo'
    }).then((response) => {
      this.intro = response.data
      this.$log.debug(this.intro)
    })
  }
}
</script>

<style lang="sass">
.wrapper-intro
  .wrapper-intro-inner
    padding: 0
    height: max-content
    .wrapper-countdown
      height: 800px
      background-color: grey
    .wrapper-description
      height: 100%
      background-color: white
      @media only screen and (max-width: 992px)
        padding-bottom: 50px
      .wrapper-description-inner
        padding: 30px 50px
        max-width: 50em
        text-align: justify
        text-justify: inter-word
        .des-heading
          color: #cec230
          font-size: 30px
          text-align: left
        .des-date
          text-align: left
        .wrapper-button
          .yellow-button
            text-align: center
            width: 250px
            float: left
            margin: 10px 5px
</style>
