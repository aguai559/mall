<template>
	<div class="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <CartList></CartList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import CartList from './chidlComps/CartList.vue'
  import CartBottomBar from './chidlComps/CartBottomBar.vue'
  import {mapGetters} from 'vuex'
	export default {
		name:'Cart',
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },

    computed:{
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }
      // ...mapGetters(['cartLength'])
      ...mapGetters({
        length:'cartLength'
      })
    }
	}
</script>

<style>
  .cart{
    height: 100vh;
  }
  .cart-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
