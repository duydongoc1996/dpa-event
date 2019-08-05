<template lang="pug">
  div.nominee-list
    h2 List nominee
    b-table(
      stripped
      hover
      :items="items"
      per-page="1"
    )
</template>
<script>
export default {
  name: 'List',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/nominate/nominees',
      headers: {
        Authorization: 'Bearer ' + sessionStorage.token
      }
    }).then((response) => {
      if (response.data.success === false) {
        alert(response.message)
      } else {
        this.items = response.data.map((x) => {
          return {
            id: x.id,
            first_name: x.first_name,
            last_name: x.last_name,
            company_name: x.company_name,
            company_website: x.company_website,
            job_title: x.job_title,
            phone: x.phone,
            email: x.email,
            nationality: x.nationality,
            award_category_id: x.fk_award_category
          }
        })
      }
    })
  }
}
</script>
