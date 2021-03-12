<template>
  <div class="wrap">
    <div class="left">
      <i class="iconfont login">&#xe60b;</i>
    </div>
    <div class="center">
      <div class="centerTop">
        <span>登录</span>/
        <span>注册</span>
      </div>
      <div class="centerBottom">
        <i class="iconfont">&#xe60c;</i>
        <span>暂无绑定手机号</span>
      </div>
    </div>
    <div class="right">
      <i class="iconfont heart">&#xe60c;</i>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileLogin'
}
</script>
<style lang="less" scoped>
@color:#ff8198;
.wrap{
  background-color: @color;
  display: flex;
  // justify-content: space-between;
  // width: 100%;
  height: 80px;
  padding: 0 20px;
  box-sizing: content-box;
  border-bottom: 10px solid rgba(0,0,0,.3);
  .left{
    width: 60px;
    height: 60px;
    margin: auto 0;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    display: table;
    .login{
      font-size: 40px;
      line-height: 60px;
      vertical-align: middle;
      display: table-cell;
    }
    color: #ccc;
  }
  .center{
    color: #fff;
    margin: auto 5px;
    font-weight: 300;
  }
  .right{
    .heart{
      font-size: 40px;
      color: #fff;
      line-height: 80px;
    }
  }
}
</style>