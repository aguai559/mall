<template>
  <div class="bottom-bar">
    <div class="buttom-content">
      <CheckButton class='button-check'
      :isChecked='isSelectAll'
      @click.native='checkClick'></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">
      合计:￥{{totalPrice}}
    </div>
    <div class="calculate">
      去计算:{{total}}
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/checkbutton/CheckButton.vue'
  import {mapGetters} from 'vuex'
  export default {
    name:'CartBottomBar',
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartList']),
      totalPrice(){
        return this.cartList.filter(item=>{
          return item.checked
        }).reduce((preValue,item)=>{
          return preValue +item.count*item.price
        },0).toFixed(2)
      },
      total(){
        return this.$store.state.cartList.filter(item=>item.checked).length
      },
      isSelectAll(){
        if(this.cartList.length===0){return false}
        return !(this.cartList.find(item=>!item.checked))
      }
    },
    methods:{
      checkClick(){
        if(this.isSelectAll){
          this.cartList.forEach(item=>item.checked=false)
        }else{
          this.cartList.forEach(item=>item.checked=true)
        }
      }
      // calculate(){
      //   if(!this.isSelectAll){
      //     this.$toast.show('请选择购买的商品')
      //   }
      // }
    }
  }
</script>

<style scoped="scoped">
  .bottom-bar{
    height: 40px;
    background-color: #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;

    display: flex;
  }
  .buttom-content{
    display: flex;
    align-items: center;
    width: 100px;
  }
  .button-check{
    width: 24px;
    height: 24px;
    line-height: 24px;
    margin: 0 8px 0 5px;

  }
  .price{
    flex: 1;
    line-height: 40px;
  }
  .calculate{
    width: 100px;
    background-color: orangered;
    color: #fff;

    line-height: 40px;

  }
</style>
