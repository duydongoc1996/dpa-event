<template lang="pug">
  div
    h3 Create awards category
    b-form(
      @submit="onSubmit"
    )
      b-form-group(
        label="Name"
        label-for="name"
      )
        b-form-input(
          id="name"
          type="text"
          required
          v-model="form.name"
        )
      b-form-group(
        label="Level"
        label-for="level"
      )
        b-form-select(
          id="level"
          @change="updateOptionsParent"
          :options="optionsLevel"
          required
          v-model="form.level"
        )
      b-form-group(
        label="Parent category ID"
        label-for="parent"
      )
        b-form-select(
          id="parent"
          v-model="form.parent"
          :options="optionsParent"
        )
      b-form-group(
        label="Description"
        label-for="description"
      )
        b-form-input(
          id="description"
          type="text"
          v-model="form.description"
        )
      b-button(
        type="submit"
        squared
        block
        variant="outline-info"
      ) Submit
</template>
<script>
export default {
  name: 'Create',
  data() {
    return {
      form: {
        name: null,
        level: null,
        parent: null,
        description: null
      },
      optionsLevel: [
        { value: null, text: '-select-' },
        { value: '1', text: '1::Main category' },
        { value: '2', text: '2::Sub category' },
        { value: '3', text: '3::Category item' }
      ],
      defaultOptions: [{ value: null, text: '-select-' }],
      optionsParent: [{ value: null, text: '-select-' }],
      categories: null
    }
  },
  mounted() {
    // Get list schedule
    this.$axios({
      method: 'get',
      url: process.env.baseUrl + '/nominate/categories'
    }).then((res) => {
      this.categories = res.data
      this.optionsParent = this.defaultOptions
    }).catch(err => this.$log.debug(err))
  },
  methods: {
    updateOptionsParent(e) {
      const cateInLevel = this.categories.filter(x => x.level === parseInt(e))
      this.$log.debug(cateInLevel)
      const cateOptions = cateInLevel.map((x) => {
        return { value: x.id, text: 'ID:: ' + x.id + ' - ' + x.name }
      })
      this.optionsParent = this.defaultOptions.concat(cateOptions)
      this.form.parent = null
    },
    onSubmit(e) {
      e.preventDefault()
      this.$axios({
        method: 'post',
        url: process.env.baseUrl + '/nominate/category/create',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.token
        },
        data: {
          categoryName: this.form.name,
          level: this.form.level,
          parent: this.form.parent,
          description: this.form.description
        }
      }).then((res) => {
        if (!alert(res.data.message)) window.location.reload()
      }).catch(err => this.$log.debug(err))
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
