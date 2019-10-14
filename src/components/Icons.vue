<template>
  <div class="icons">
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        </div>
        <p class="icon-desc">景点门票</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
@import '~@styles/varible.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    background-color: green
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        right: 0
        left: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        height: .44rem
        text-align: center
        color: $darkTextColor
</style>
