<template>
<div>
  <city-header></city-header>
  <city-search></city-search>
  <city-list :cities="cities" :hotCities="hotCities"></city-list>
  <city-alphabet :cities="cities"></city-alphabet>
</div>
</template>

<script>
import CityHeader from '@/components/City/Header'
import CitySearch from '@/components/City/Search'
import CityList from '@/components/City/List'
import CityAlphabet from '@/components/City/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      this.$ajax.get('/api/city.json')
        .then(this.handleGetCityInfo)
    },
    handleGetCityInfo (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
