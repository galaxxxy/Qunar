<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">
          {{sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{galleryImgs.length}}
        </div>
      </div>
    </div>
    <common-gallery
      :imgs="galleryImgs"
      v-show="showGallery"
      @close="handleBannerClick"
    ></common-gallery>
  </div>
</template>

<script>
import CommonGallery from '@common/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = !this.showGallery
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #ffffff
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        font-size: .32rem
        padding: 0 .2rem
        flex: 1
      .banner-number
        padding: 0 .4rem
        height: .32rem
        margin-top: .14rem
        line-height: .32rem
        border-radius: .2rem
        background-color: rgba(0, 0, 0, .7)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
