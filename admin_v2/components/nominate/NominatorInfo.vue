<template lang="pug">
  div.nominator-info
    div.inner
      div.body
        div.header
          p
            strong Nominator's info
        div.body
          div.item(
            v-for="(x, index) in nominators"
            :key="index"
          )
            b-button.update-btn(
              v-b-toggle="`updatenominator-${index}`"
              block
              round
              variant="light"
            )
              div.name
                fa(icon="envelope-square")
                span {{ ' ' + x.first_name + ' ' + x.last_name }}
              div.expand
                fa(
                  :icon="'angle-' + ((listStateOfCollapse[index] === true) ? 'up' : 'down')"
                )
            div.update
              b-collapse(
                :id="'updatenominator-' + index"
                v-model="listStateOfCollapse[index]"
              )
                b-form
                  b-container(fluid)
                    b-row
                      b-col(cols=6)
                        b-form-group(label="First name")
                          b-form-input(
                            v-model="x.first_name"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Last name")
                          b-form-input(
                            v-model="x.last_name"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Email address")
                          b-form-input(
                            v-model="x.email"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Cell phone")
                          b-form-input(
                            v-model="x.phone"
                            required
                          )
                      b-col(cols=12)
                        div.save
                          b-button(
                            @click="updateNominator(x)"
                            variant="success"
                          ) Save
</template>
<script>
export default {
  name: 'NominatorInfo',
  data() {
    return {
      nominators: null,
      listStateOfCollapse: []
    }
  },
  mounted() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/nominate/nominators',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.token,
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.data.count !== null) {
        this.nominators = response.data
        this.listStateOfCollapse = this.nominators.map(x => false)
      }
    })
  },
  methods: {
    updateNominator(nominator) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/nominate/nominator/update',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(nominator)
      }).then((response) => {
        if (!alert(response.data.message)) {}
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>
.no-padding
  padding: 0
.nominator-info
  .inner
    .body
      .item
        .update-btn
          position: relative
          padding: 0.5em
          margin: 0.5em 0
          .name
            text-align: left
            color: #d1c531
            span
              color: black
          .expand
            position: absolute
            right: 1em
            top: 0.5em
        .update
          background-color: white
          border-radius: 1em
          .save
            text-align: center
            margin-bottom: 1em
</style>
