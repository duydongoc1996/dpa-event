<template lang="pug">
  div.wrapper-judges
    div.wrapper-judges-inner
      div.jud-header
        p.jud-heading JUDGES
      div.jud-body
        b-row
          b-col(
            sm="3"
            v-for="x in 4"
          )
            div.jud-item
              div.jud-avatar(
                :style="{ backgroundImage: 'url('+ require('assets/judge.png') + ')' } "
              )
              div.jud-detail
                p.jud-name Lisa Cook
                p.jud-jobtitle Operation director
                p.jud-companyname Purple Swan
</template>

<script>
export default {
  name: 'SectionJudges',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.wrapper-judges
  background-color: grey
  .wrapper-judges-inner
    padding: 50px 0
    width: 992px
    margin: 0 auto
    .jud-header
      text-align: center
      .jud-heading
        color: #cec230
        font-size: 30px
    .jud-body
      text-align: center
      .jud-item
        position: relative
        .jud-avatar
          position: relative
          height: 230px
          background-position: center top
          background-repeat: no-repeat
          overflow: hidden
        .jud-avatar::after
          position: absolute
          width: 100%
          height: 100px
          background-color: white
          content: ""
          bottom: 0px
          left: 0
          transform: translate(0,50px) skewY(-10deg)
        .jud-detail
          background-color: white
          .jud-name
          .jud-jobtitle
          .jud-companyname

</style>
