<template lang="pug">
  div.wrapper-header
    div.menu
      b-navbar(
        toggleable="lg"
        type="dark"
        variant="transparent"
      )
        b-navbar-brand.ml-auto.logo(href="#")
          b-img(
            src="https://static.wixstatic.com/media/24cbfa_8954d379c5f64638b04e7f6ae09a1f7c~mv2.png/v1/fill/w_222,h_81,al_c,q_80,usm_0.66_1.00_0.01/DPA_logo(white).webp"

          )
        b-navbar-toggle(target="nav-collapse")
        b-collapse(id="nav-collapse" is-nav)
          b-navbar-nav.mx-auto
            b-nav-item(href="#" active) Home
            b-nav-item(href="#") Sponsorship
            b-nav-item(href="#") Attend
            b-nav-item(href="#") Nominate
            b-nav-item(href="#") Vote
          b-navbar-nav.ml-auto.language
            b-nav-item
              span LANGUAGE &nbsp;
              b-dropdown.dd-language(
                text="EN"
                variant="outline-light"
              )
                b-dropdown-item(href="#") EN
                b-dropdown-item(href="#") KR
    div.carousel
      b-carousel(
        id="carousel-no-animation"
        indicators
        :interval="400000"
        img-width="1024"
        img-height="480"
      )
        b-carousel-slide(
          img-src="~/assets/Background.png"
        )
          p.wrapper-caption.caption-big DECENTRALIZE
            br
            span PEOPLE'S AWARDS 2019
          p.wrapper-caption.caption-description Celebrate your hard word and contribution to the block chain industry
          b-button(variant="outline-light")
            span NOMINATE &nbsp;
            fa(icon="arrow-right")
        b-carousel-slide(
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=10"
        )
        b-carousel-slide(
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        )
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
.menu
  position: absolute
  z-index: 2
  width: 100%
  padding: 2em 3em 0 3em
  @media only screen and (max-width: 992px)
    #nav-collapse
      background-color: grey
      z-index: 2
  .logo
    margin-left: 0 !important
    padding: 10px
    @media only screen and (max-width: 992px)
      img
        width: 120px
  .navbar
    padding: 0
    .navbar-nav
      .nav-item
        padding: 20px 15px
        .nav-link
          color: white
          padding: 5px
        .active
          border-bottom: 2px solid white
  .language
    margin-left: 0 !important
    .dd-language
      button
        border-radius: 20px
        padding: 3px 15px
.carousel
  z-index: 1
  button
    width: 200px
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
      .caption-description
        position: relative
        width: 20em
        margin: 1em auto
  .carousel-indicators
    bottom: 25%
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
