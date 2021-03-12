<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
	</div>
</template>

<script>
	// import tarBar from "./components/common/tabbar/tarBar.vue"
	// import tarBarItem from "./components/common/tabbar/tabBarItem.vue"
  import mainTabBar from 'components/context/mainTabBar/MainTabBar.vue';
	export default {
		name:"App",
		components:{
			mainTabBar
      // tarBar,
      // tarBarItem
		}
	}

</script>

<style lang="scss">
	@import '~assets/css/base.css'

</style>
