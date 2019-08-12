<template lang="pug">
  div.list-sponsor
    div.inner
      div.header
      div.body
        div.sponsor-item(v-for="x in 4")
          div.left
            span Delegacy
          div.right
            span.round-icon
              fa(icon="trash-alt")
            span.round-icon
              fa(icon="cog")
        div.more-btn
          b-button(
            squared
            variant="light"
          ) MORE
</template>
<script>
export default {
  name: 'ListSponsor',
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.list-sponsor
  .inner
    .header
    .body
      .sponsor-item
        margin: 1em 0
        background-color: white
        padding: 20px 20px
        height: 60px
        border-radius: 10px
        .left
          float: left
        .right
          float: right
          .round-icon
            border-radius: 20px
            background-color: grey
            color: white
            padding: 10px
      .more-btn
        text-align: center
        .btn
          padding: .5em 4em
          background-color: white
          border: 1px solid grey
</style>
