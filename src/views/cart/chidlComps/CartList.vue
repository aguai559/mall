<template>
  <div class="cart-list">
    <!-- <li v-for="(item,index) in cartList" :key='index'>{{item}}</li> -->
    <scroll class="content" ref='scroll'>
      <CartListItem v-for='(item,index) in cartList' :key='index' :itemInfo='item'></CartListItem>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem.vue'

  export default{
    name:'CartList',
    components:{
      scroll,
      CartListItem

    },
    activated() {
      this.$refs.scroll.refresh()
    },
    computed:{
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped="scoped">
  .cart-list{
    /* height: calc(100% - 44px -49px -40px); */
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 89px;
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
