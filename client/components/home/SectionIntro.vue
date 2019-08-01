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
                strong DECEMBER 20, 2019 | 16:00 - 21:00
              p.des-text
                strong Recognition on chain.
              p.des-text Celebrate your hard work and contribution to the blockchain industry. TokenPost is a leading provider of news on distributed ledger technology and strives to keep readers abreast of the latest trends and technology developments in the blockchain industry. We provide unbiased and up-to-date information from numerous sources to deliver well-balanced and objective news with a creative and novel perspective.
              p.des-text As a vital outlet for information sharing and learning, TokenPost is opening a new chapter in the blockchain media sector by serving the public and enthusiasts, going beyond the limited role of just another news provider in the blockchain sphere.
              p.des-text As part of this effort, TokenPost will host Decentralized People’s Awards Korea 2019 (DPA) to celebrate the achievements of companies and individuals who have contributed to the development and innovation of the blockchain technology. As a follow up to Blockchain Open Forum 2018, the largest blockchain conference of 2018 in South Korea, DPA will become a household name for blockchain awards.
              p.des-text DPA will focus on identifying and bringing to light individuals and enterprises that have helped advance our society by innovating and implementing the blockchain technology in their fields. Noteworthy projects and pioneers will be selected and voted for by the people as the decentralized voice. Joined by the most sought after experts and entrepreneurs in the current blockchain scene, Decentralized People’s Award 2019 will also provide a special opportunity to network and promote further discussion into the future of the blockchain technology.
              div.wrapper-button
                nuxt-link(to="/attend")
                  div.yellow-button
                    strong ATTEND &nbsp;
                    fa(icon="arrow-right")
                nuxt-link(to="/nominate")
                  div.yellow-button
                    strong NOMINATE &nbsp;
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
    return {}
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
        .des-date
        .wrapper-button
          .yellow-button
            text-align: center
            margin-right: 10px
            width: 200px
            float: left
</style>
