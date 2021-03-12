<template>
  <div id="profileShopList">
    <ul>
      <li>
        <i class="iconfont">&#xe620;</i>
        <span>我的购物车</span>
      </li>
      <li>
        <i class="iconfont">&#xe63a;</i>
        <span>下载购物APP</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'ProfileShopList'
}
</script>
<style lang='less' scoped>
@color:#ff8198;
#profileShopList{
  background-color: #ccc;
  ul{
    li{
      height: 60px;
      background-color: #fff;
      margin-bottom: 2px;
      padding: 0 10px;
      line-height: 60px;
      i{
        color: @color;
        font-size: 30px;
        
      }
      span{
        // line-height: 60px;
        font-size: 22px;
        margin-left: 15px;
        
      }
    }
  }
}
</style>