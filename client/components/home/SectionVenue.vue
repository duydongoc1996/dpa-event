<template lang="pug">
  div.wrapper-venue
    div.wrapper-venue-inner
      b-container
        b-row
          b-col(
            sm="12"
            md="4"
          )
            div.ven-header
              p.ven-heading
                strong VENUE
              p.ven-location IMPERIAL PALACE HOTEL SEOUL, 7TH FLOOR, SELENA HALL
              p.ven-address Address: 640, Eonuj-ro Nonhyeon 2(1)-Dong, Gangnam-gu, Seoul
              div.wrapper-button
                a(href="https://maps.google.com/maps?ll=37.514021,127.035881&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=12122617480018425024")
                  div.yellow-button
                    strong GOOGLE MAP &nbsp;
                    fa(icon="arrow-right")
          b-col(
            sm="12"
            md="8"
          )
            div.ven-map(
              v-html="gmap"
            )
</template>

<script>
export default {
  name: 'SectionVenue',
  data() {
    return {
      gmap: '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=640%2C%20Eonuj-ro%20Nonhyeon%202(1)-Dong%2C%20Gangnam-gu%2C%20Seoul&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.enable-javascript.net">enable-javascript.net</a></div><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div>'
    }
  }
}
</script>

<style lang="sass">
.wrapper-venue
  background-color: #2c2c2c
  .wrapper-venue-inner
    padding: 50px 0
    .ven-header
      color: white
      .ven-heading
        color: #cec230
        font-size: 30px
      .ven-location
      .ven-address
      .wrapper-button
        .yellow-button
          text-align: center
          width: 200px
          float: left
          margin: 10px 5px
    .ven-map
      background-color: white
      width: 100%
      height: 100%
      @media only screen and (max-width: 768px)
        margin-top: 20px
</style>
