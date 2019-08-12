<template lang="pug">
  div.list-nominee
    div.inner
      div.header
        b-button.collapse-btn(
          v-b-toggle.collapse-list-nominee
          block
          variant="light"
        )
          span.left Best in ICO &gt; Middle East &gt; Community
          span.right
            fa(:icon="'angle-' + ((showCollapse) ? 'up' : 'down')")
        b-collapse(
          id="collapse-list-nominee"
          v-model="showCollapse"
        )
          div.collapse-content
            p Choose Award category
      div.body
        div.nominee-item(v-for="x in 4")
          div.left
            span Best in ICO &gt; Middle East &gt; Community
            span Sonny Kwon
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
  name: 'ListNominee',
  data() {
    return {
      showCollapse: false
    }
  }
}
</script>
<style lang="sass" scoped>
.list-nominee
  .inner
    .header
      .collapse-btn
        background-color: white
        padding: 1em
        .left
          float: left
        .right
          float: right
      .collapse-content
        padding: 2em
    .body
      .nominee-item
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
