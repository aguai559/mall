<template>
  <div id="profileCenter">
    <div class="left">
      <div>{{rmb}} 元</div>
      <span>我的余额</span>
    </div>
    <div class="center">
      <div>{{preferential}} 个</div>
      <span>我的优惠</span>
    </div>
    <div class="right">
      <div>{{points}} 分</div>
      <span>我的积分</span>
    </div>

  </div>
</template>

<script>
export default {
  name:'ProfileCenter',
  data(){
    return{
      rmb:0.00,
      preferential:0,
      points:0
    }
  }
}
</script>
<style lang='less' scoped>
#profileCenter{
  height: 80px;
  display: flex;
  background-color: #ccc;
  justify-content: space-between;
  border-bottom: 10px solid #ccc;
}
.left,.center,.right{
  width: 32%;
  background-color: #fff;
  font-size: 18px;
  font-weight: 300;
  margin: 0 2px;
  div{
    margin: 10px 0;
    text-align: center;
  }
  span{
    display: block;
    text-align: center;
    
  }
}
// .center{
//   margin: 0 2px;
//   div{
//     margin: 10px 0;
//     text-align: center;
//   }
//   span{
//     display: block;
//     text-align: center;
    
//   }
// }
</style>