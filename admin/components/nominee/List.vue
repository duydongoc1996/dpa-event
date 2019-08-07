<template lang="pug">
  div.nominee-list
    h2 List nominee
    b-table(
      striped
      :fields="fields"
      :items="items"
      per-page="10"
      :current-page="page"
      sort-by="id"
      sort-desc="true"
    )
      template(slot="show_details" slot-scope="row")
        b-button(
          @click="row.toggleDetails"
          variant="info"
        ) {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        b-button(
          @click="$emit('update:editId', row.item)"
          variant="success"
        ) Edit
      template(slot="row-details" slot-scope="row")
        b-card
          b-row
            b-col.text-center(
              cols="3"
            ) Avatar
            b-col
              b-img(
                :src="imgSrc + row.item.avatar"
              )
          b-row
            b-col.text-center(
              cols="3"
            ) Prefix
            b-col {{ row.item.prefix }}
          b-row
            b-col.text-center(
              cols="3"
            ) First Name
            b-col {{ row.item.first_name }}
          b-row
            b-col.text-center(
              cols="3"
            ) Last Name
            b-col {{ row.item.last_name }}
          b-row
            b-col.text-center(
              cols="3"
            ) Phone
            b-col {{ row.item.phone }}
          b-row
            b-col.text-center(
              cols="3"
            ) Email
            b-col {{ row.item.email }}
          b-row
            b-col.text-center(
              cols="3"
            ) Company Name
            b-col {{ row.item.company_name }}
          b-row
            b-col.text-center(
              cols="3"
            ) Company Website
            b-col {{ row.item.company_website }}
          b-row
            b-col.text-center(
              cols="3"
            ) Job Title
            b-col {{ row.item.job_title }}
          b-row
            b-col.text-center(
              cols="3"
            ) Nationality
            b-col {{ row.item.nationality }}
          b-row
            b-col.text-center(
              cols="3"
            ) Category ID
            b-col {{ row.item.fk_award_category }}
          b-row
            b-col.text-center(
              cols="3"
            ) Other Category
            b-col {{ row.item.other_category }}
          b-row
            b-col.text-center(
              cols="3"
            ) Description
            b-col {{ row.item.about_speaker }}
          b-row
            b-col.text-center(
              cols="3"
            ) Links Media
            b-col {{ row.item.links_media }}
    div.pagination
      b-button(
        squared
        variant="outline-primary"
        @click="previousPage"
      ) &lt;
      b-input(
        v-model="page"
      )
      b-button(
        squared
        variant="outline-primary"
        @click="nextPage"
      ) &gt;
</template>
<script>
export default {
  name: 'List',
  props: {
    editId: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      fields: ['id', 'first_name', 'last_name', 'phone', 'email', 'show_details'],
      items: [],
      page: 1,
      imgSrc: process.env.baseUrl + '/static/'
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/api/nominate/nominees',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.token
      }
    }).then((response) => {
      if (response.data.success === false) {
        alert(response.message)
      } else {
        this.items = response.data
      }
    })
  },
  methods: {
    nextPage() {
      this.page++
    },
    previousPage() {
      this.page = (this.page <= 1) ? 1 : this.page - 1
    }
  }
}
</script>
<style lang="sass" scoped>
.nominee-list
  position: relative
  .pagination
    width: fit-content
    margin: 0 auto
    input
      width: 3em
      text-align: center
</style>
