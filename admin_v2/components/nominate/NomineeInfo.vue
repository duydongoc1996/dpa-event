<template lang="pug">
  div.nominee-info
    div.inner
      div.body
        div.header
          p
            strong Nominee's info
        div.body
          div.item(
            v-for="(x, index) in nominees"
            :key="index"
          )
            b-button.update-btn(
              v-b-toggle="`updatenominee-${index}`"
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
                :id="'updatenominee-' + index"
                v-model="listStateOfCollapse[index]"
              )
                b-form
                  b-container(fluid)
                    b-row
                      b-col(cols=6)
                        b-form-group(label="I am nominating myself")
                          b-form-checkbox(
                            v-model="x.self"
                            required
                          ) I am nominating myself
                      b-col(cols=6)
                        b-form-group(label="Prefix")
                          b-form-input(
                            v-model="x.prefix"
                            required
                          )
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
                        b-form-group(label="Company name")
                          b-form-input(
                            v-model="x.company_name"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Job title")
                          b-form-input(
                            v-model="x.job_title"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Website address")
                          b-form-input(
                            v-model="x.company_website"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Cell phone")
                          b-form-input(
                            v-model="x.phone"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Email address")
                          b-form-input(
                            v-model="x.email"
                            required
                          )
                      b-col(cols=6)
                        b-form-group(label="Nationality")
                          b-form-input(
                            v-model="x.nationality"
                            required
                          )
                      b-col(cols=12)
                        b-form-group(label="Award category")
                          b-form-input(
                            v-model="listFullPath[index]"
                            required
                            disabled
                          )
                      b-col(cols=12)
                        b-form-group(label="Tell us more about the speaker.Why are you nominating this person?")
                          b-form-textarea(
                            v-model="x.about_speaker"
                            required
                          )
                      b-col(cols=12)
                        b-form-group(label="Please provide link to online video or audio featuring the nominee.")
                          b-form-input(
                            v-model="x.links_media"
                            required
                          )
                      b-col(cols=12)
                        b-form-group(label="Do you know this person personally? - It's okay even if you do not.")
                          b-form-radio(
                            v-model="x.is_know"
                            :value="true"
                            required
                          ) Yes
                          b-form-radio(
                            v-model="x.is_know"
                            :value="false"
                            required
                          ) No
                      b-col(cols=12)
                        div.save
                          b-button(
                            @click="updateNominee(x)"
                            variant="success"
                          ) Edit nominee's info
          //- div.more-btn
          //-   b-button(
          //-     @click="getMoreNominee"
          //-     variant="info"
          //-   ) More
</template>
<script>
export default {
  name: 'NomineeInfo',
  data() {
    return {
      nominees: null,
      listStateOfCollapse: [],
      listFullPath: [],
      limit: 0,
      offset: 1
    }
  },
  mounted() {
    this.getMoreNominee()
  },
  methods: {
    updateNominee(nominee) {
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/api/nominate/nominee/update',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(nominee)
      }).then((response) => {
        if (!alert(response.data.message)) {}
      }).catch(err => this.$log.debug(err))
    },
    getMoreNominee() {
      this.limit += 20
      this.$axios({
        method: 'get',
        url: process.env.baseUrl + `/api/nominate/nominees`,
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token,
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.data.count !== null) {
          this.nominees = response.data
          this.listStateOfCollapse = this.nominees.map(x => false)
        }
        return this.nominees.map(x => x.fk_award_category)
      }).then(async (listCategory) => {
        const body = {
          list: listCategory.join(',')
        }
        const fullPath = await this.$axios({
          method: 'post',
          url: process.env.baseUrl + '/api/nominate/category/full',
          data: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.listFullPath = fullPath.data
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.no-padding
  padding: 0
.nominee-info
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
          .collapse
            padding: 1em 0
          .save
            text-align: center
            margin-bottom: 1em
      .more-btn
        text-align: center
</style>
