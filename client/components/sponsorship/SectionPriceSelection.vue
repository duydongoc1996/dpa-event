<template lang="pug">
  div.wrapper-selection
    div.wrapper-selection-inner
      div.select-type-box(
        v-for="content in selectContent"
      )
        div.select-header
          b-form-checkbox(
            v-model="check"
            name="formSelect"
            :value="content.key"
            class="price-select"
          )
            div.select-checkbox
              div.select-checkbox-checked(
                v-if="check == content.key"
              )
            div.select-content
              strong {{ content.title }} &nbsp;
              span {{ content.price }}
              div.updown-angle
                fa(:icon="(check == content.key) ? 'angle-up' : 'angle-down'")
        b-collapse(id="premier-collapse" :visible="(check == content.key)")
          ul
            li(v-for="benefit in content.benefits") {{ benefit }}
</template>
<script>
export default {
  name: 'SectionPriceSelection',
  props: {
    checked: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      check: this.checked,
      selectContent: [
        {
          key: 'premier',
          title: 'Premier sponsorship',
          price: 'USD 126,800 (VAT included)',
          benefits: [
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company'
          ]
        },
        {
          key: 'gold',
          title: 'Gold sponsorship',
          price: 'USD 17,000 (VAT included)',
          benefits: [
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company'
          ]
        },
        {
          key: 'partnership',
          title: 'Partnership Package',
          price: 'USD 4,200 (VAT included)',
          benefits: [
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company'
          ]
        },
        {
          key: 'nomination',
          title: 'Nomination Sponsorship',
          price: 'USD 420 (VAT included)',
          benefits: [
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company',
            'Play the advertising video of the sponsor company'
          ]
        }
      ],
      companyName: '',
      fullName: '',
      websiteAddress: '',
      emailAddress: '',
      telegramId: '',
      jobTitle: '',
      companyDescription: '',
      companyLogo: '',
      agree: false
    }
  }
}
</script>
<style lang="sass">
.wrapper-selection
  background-color: white
  .wrapper-selection-inner
    width: 992px
    margin: 0 auto
    border-top: 2px solid #cec230
    @media only screen and (max-width: 992px)
      width: 100%
    .select-type-box
      border-top: 1px solid #e2e2e2
      border-bottom: 1px solid #e2e2e2
      .select-header
        padding: 10px
        background-color: #f2f2f2
        .select-checkbox
          position: absolute
          left: 0
          top: 0
          width: 1.2rem
          height: 1.2rem
          border: 1px solid #d2d2d2
          border-radius: 4px
          .select-checkbox-checked
            background-color: #cec230
            border-color: #cec230
            border-radius: 3px
            width: 0.8rem
            height: 0.8rem
            margin-top: 0.1rem
            margin-left: 0.1rem
        .price-select
          padding: 0
          .custom-control-label
            padding-left: 2rem
            width: 100%
            &:before
              display: none
            &:after
              display: none
            .select-content
              width: 100%
              .updown-angle
                position: absolute
                right: 0
                top: 0
                color: grey
</style>
