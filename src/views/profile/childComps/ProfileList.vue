<template>
  <div id="profileList">
    <ul>
      <li>
        <i class="iconfont">&#xe604;</i>
        <span>我的消息</span>
      </li>
      <li>
        <i class="iconfont">&#xe620;</i>
        <span>积分商城</span>
      </li>
      <li>
        <i class="iconfont">&#xe614;</i>
        <span>会员卡</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'ProfileList'
}
</script>
<style lang='less' scoped>
@color:#ff8198;
#profileList{
  background-color: #ccc;
  border-bottom: 8px solid #ccc;
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