<template lang="pug">
  div.wrapper-header
    div.carousel
      b-carousel(
        id="carousel-no-animation"
        indicators
        :interval="4000000"
        img-width="1024"
        img-height="480"
      )
        b-carousel-slide(
          img-src="~/assets/Background.png"
        )
          p.wrapper-caption.caption-big
            strong DECENTRALIZED
              br
              span PEOPLE'S AWARDS 2019
          p.wrapper-caption.caption-description Celebrate your hard work and contribution to the blockchain industry
          nuxt-link.nominate-btn(to="/nominate")
            div.white-button
              strong NOMINATE &nbsp;
              fa(icon="arrow-right")
      div.scroll
        div.icon-scroll
          fa(icon="circle")
        div.text-scroll SCROLL
        div.verticle-line
</template>

<script>
export default {
  name: 'SectionHeader',
  data() {
    return {
    }
  }
}
</script>

<style lang="sass">
.carousel
  z-index: 1
  .nominate-btn
    text-align: center
    .white-button
      margin: 0 auto
  .carousel-item
    .carousel-caption
      top: 30%
      text-align: center
      .wrapper-caption
        line-height: 1em
      .caption-big
        font-size: 50px
        @media only screen and (max-width: 992px)
          font-size: 30px
        @media only screen and (max-width: 768px)
          display: 24px
      .caption-description
        position: relative
        width: 20em
        margin: 1em auto
        @media only screen and (max-width: 576px)
          display: none
  .carousel-indicators
    bottom: 100px
    .active
      background-color: yellow
    @media only screen and (max-width: 992px)
      display: none
.scroll
  position: absolute
  bottom: 0
  color: white
  z-index: 2
  left: 50%
  transform: translate(-50%,0)
  text-align: center
  .icon-scroll
    position: relative
    border: 2px solid white
    border-radius: 20px
    padding: 2px 5px 10px 5px
    margin: 0 auto
    width: 30px
  .verticle-line
    margin: 0 auto
    border: 1px solid white
    width: 1px
    height: 50px
  @media only screen and (max-width: 992px)
    font-size: 70%
    .icon-scroll
      position: relative
      border: 1px solid white
      border-radius: 10px
      padding: 1px 1px 10px 1px
      margin: 0 auto
      width: 20px
    .verticle-line
      height: 30px
  @media only screen and (max-width: 768px)
    display: none
</style>
