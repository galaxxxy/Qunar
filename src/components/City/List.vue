<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area border-topbottom">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area border-topbottom">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
        </div>
        <div class="title">A</div>
        <div class="item-list">
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
          <div class="item border-bottom">
            安庆
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varible.styl'
  .border-topbottom
    &:before
      border-color: #cccccc
    &:after
      border-color: #cccccc
  .border-bottom
    &:before
      border-color: #cccccc
  .list
    position: absolute
    overflow: hidden
    top: 1.58rem
    left: 0
    bottom: 0
    right: 0
    .title
      line-height: .54rem
      background: #eeeeee
      padding-left: .2rem
      color: #666666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #cccccc
          border-radius: .02rem
    .item-list
      .item
        line-height .76rem
        padding-left: .2rem
</style>
