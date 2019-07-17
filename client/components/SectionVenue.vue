<template lang="pug">
  div.wrapper-venue
    div.wrapper-venue-inner
      b-container
        b-row
          b-col(
            sm="4"
          )
            div.ven-header
              p.ven-heading VENUE
              p.ven-location IMPERIAL PALACE HOTEL SEOUL, 7TH FLOOR, SELENA HALL
              p.ven-address Address: 640, Eonuj-ro Nonhyeon 2(1)-Dong, Gangnam-gu, Seoul
              b-button(squared) GOOGLE MAP &nbsp;
                fa(icon="arrow-right")
          b-col(
            sm="8"
          )
            div.ven-map
</template>

<script>
export default {
  name: 'SectionVenue',
  data() {
    return {}
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
      button
        background-color: #cec230
    .ven-map
      background-color: white
      width: 100%
      height: 100%
</style>
