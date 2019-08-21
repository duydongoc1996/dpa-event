<template lang="pug">
  div.list-partner
    div.inner
      div.header
      div.body(
        @drop="drop"
        @dragover="dragover"
      )
        div.partner-item(
          v-for="(x, index) in partners"
          draggable="true"
          @dragstart="drag"
          :id="'partner-' + index"
        )
          div.left
            span {{ x.company_name }}
          div.right
            b-button.round-icon(
              @click="remove(x.id, index)"
            )
              fa(icon="trash-alt")
            b-button.round-icon(
              v-b-toggle="`updatepartner-${index}`"
            )
              fa(icon="cog")
          div.update
            b-collapse(
              :id="'updatepartner-' + index"
            )
              b-form
                b-form-group(label="Company name")
                  b-form-input(v-model="x.company_name")
                b-form-group(label="Company website")
                  b-form-input(v-model="x.company_website")
                b-form-group(label="Order")
                  b-form-input(v-model="x.ordinal")
                div.save-btn
                  b-button(
                    squared
                    variant="success"
                    @click="updatePartner(x)"
                  ) Save
        div.more-btn
          b-button(
            squared
            variant="light"
          ) MORE
</template>
<script>
export default {
  name: 'ListPartner',
  data() {
    return {
      partners: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/partners'
    }).then((response) => {
      if (response.data.length === 0) {
        this.partners = []
      } else {
        this.partners = this.sortOrder(response.data)
        this.$log.debug(this.partners)
      }
    })
  },
  methods: {
    remove(id, index) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/partner/remove/' + id,
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (!alert(response.data.message)) {
          this.partners.splice(index, 1)
        }
      }).catch(err => this.$log.debug(err))
    },
    updatePartner(partner) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/partner/update',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(partner)
      }).then((response) => {
        if (!alert(response.data.message)) { window.location.reload() }
      }).catch(err => this.$log.debug(err))
    },
    sortOrder(list) {
      return list.sort((a, b) => {
        if (a.ordinal > b.ordinal) return 1
        if (a.ordinal < b.ordinal) return -1
        if (a.ordinal === b.ordinal) return 0
      })
    },
    drag(ev) {
      const id = ev.target.id.replace('partner-', '')
      this.$log.debug(id)
      ev.dataTransfer.setData('text', ev.target.id)
    },
    dragover(ev) {
      ev.preventDefault()
    },
    drop(ev) {
      ev.preventDefault()
      this.$log.debug(ev.toElement.parentNode)
      // const current = ev.target.id
      // const after = ev.toElement.id
    }
  }
}
</script>
<style lang="sass" scoped>
.list-partner
  .inner
    .header
    .body
      position: relative
      .partner-item
        position: relative
        margin: 1em 0
        background-color: white
        padding: 20px 20px
        border-radius: 10px
        height: fit-content
        .left
          position: relative
        .right
          text-align: right
          position: absolute
          right: 1em
          top: 1em
          .round-icon
            border-radius: 50%
            background-color: grey
            color: white
        .update
          background-color: #f4f4f4
          .collapse
            padding: 1em
            margin-top: 2em
      .more-btn
        text-align: center
        .btn
          padding: .5em 4em
          background-color: white
          border: 1px solid grey
</style>
