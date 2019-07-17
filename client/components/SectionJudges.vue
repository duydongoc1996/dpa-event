<template lang="pug">
  div.wrapper-judges
    div.wrapper-judges-inner
      div.jud-header
        p.jud-heading JUDGES
      div.jud-body
        b-row
          b-col.gutter-15(
            sm="3"
            v-for="x in 12"
            :key="x"
          )
            div.jud-item
              div.jud-avatar(
                :style="{ backgroundImage: 'url('+ require('assets/judge.png') + ')' } "
              )
              div.jud-detail
                p.jud-name
                  strong Lisa Cook
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
  background-color: #2c2c2c
  .wrapper-judges-inner
    padding: 100px 0
    width: 992px
    margin: 0 auto
    .jud-header
      text-align: center
      padding: 20px 0
      .jud-heading
        color: #cec230
        font-size: 30px
    .jud-body
      text-align: center
      .gutter-15
        padding: 10px
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
          padding-bottom: 30px
          .jud-name
          .jud-jobtitle
            line-height: 1
            margin: 0
          .jud-companyname
            line-height: 1
            margin: 0

</style>
