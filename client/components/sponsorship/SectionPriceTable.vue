<template lang="pug">
  div.wrapper-price
    div.wrapper-price-inner
      b-table(
        :fields="fields"
        :items="items"
        thead-tr-class="sponsor-thead-tr"
        bordered
      )
        template(slot="HEAD_premier" slot-scope="data")
          b-form-checkbox(
            v-model="check"
            name="sponsorType"
            value="premier"
          )
            div.select-checkbox
              div.select-checkbox-checked(
                v-if="check == 'premier'"
              )
            strong {{ fields.premier.label }}
        template(slot="HEAD_gold" slot-scope="data")
          b-form-checkbox(
            v-model="check"
            name="sponsorType"
            value="gold"
          )
            div.select-checkbox
              div.select-checkbox-checked(
                v-if="check == 'gold'"
              )
            strong {{ fields.gold.label }}
        template(slot="HEAD_partnership" slot-scope="data")
          b-form-checkbox(
            v-model="check"
            name="sponsorType"
            value="partnership"
          )
            div.select-checkbox
              div.select-checkbox-checked(
                v-if="check == 'partnership'"
              )
            strong {{ fields.partnership.label }}
        template(slot="HEAD_nomination" slot-scope="data")
          b-form-checkbox(
            v-model="check"
            name="sponsorType"
            value="nomination"
          )
            div.select-checkbox
              div.select-checkbox-checked(
                v-if="check == 'nomination'"
              )
            strong {{ fields.nomination.label }}
      b-button.purchase-btn(
        squared
        @click="$emit('update:checked', check)"
      ) PURCHASE &nbsp;
        fa(icon="arrow-right")
</template>
<script>
export default {
  name: 'SectionPriceTable',
  props: {
    checked: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      check: this.checked,
      fields: {
        premier: {
          label: 'Premier Sponsorship'
        },
        gold: {
          label: 'Gold Sponsorship'
        },
        partnership: {
          label: 'Partnership Package'
        },
        nomination: {
          label: 'Nomination Sponsorship'
        }
      },
      items: [
        {
          premier: '1',
          gold: '1',
          partnership: '1',
          nomination: '1'
        },
        {
          premier: '2',
          gold: '2',
          partnership: '2',
          nomination: '2'
        },
        {
          premier: '3',
          gold: '3',
          partnership: '3',
          nomination: '3'
        }
      ]
    }
  }
}
</script>
<style lang="sass">
.wrapper-price
  background-color: white
  .wrapper-price-inner
    width: 992px
    margin: 0 auto
    text-align: center
    @media only screen and (max-width: 992px)
      width: 100%
    .sponsor-thead-tr
      border-top: 2px solid #cec230
      background-color: #f2f2f2
    .purchase-btn
      background-color: #cec230
      border-color: #cec230
      margin-bottom: 50px
    .custom-checkbox
      padding: 0
      .custom-control-label
        width: 100%
        &:before
          display: none
        &:after
          display: none
    .select-checkbox
      position: absolute
      left: 0
      top: 0
      width: 1.1rem
      height: 1.1rem
      border: 1px solid #d2d2d2
      border-radius: 4px
      .select-checkbox-checked
        background-color: #cec230
        border-color: #cec230
        border-radius: 3px
        width: 0.8rem
        height: 0.8rem
        margin: 0.1rem
</style>
