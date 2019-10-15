<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@styles/varible.styl'
  .header
    display: flex
    line-height: $headerHeight
    background-color: $bgColor
    color: #ffffff
    .header-left
      width: .64rem
      float: left
      .back-icon
        display: block
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #ffffff
      border-radius: .1rem
      color: #cccccc;
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #ffffff
      .arrow-icon
        font-size: .24rem
        margin-left: -.04rem
</style>
