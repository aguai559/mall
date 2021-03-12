<template>
  <div>
    <profileTop></profileTop>
    <profileLogin></profileLogin>
    <profileCenter></profileCenter>
    <profileList></profileList>
    <profileShopList></profileShopList>
  </div>
</template>

<script>
  import profileTop from './childComps/ProfileTop'
  import profileLogin from './childComps/ProfileLogin'
  import profileCenter from './childComps/ProfileCenter'
  import profileList from './childComps/ProfileList'
  import profileShopList from './childComps/ProfileShopList'
	export default {
		name:'Profile',
    components:{
      profileTop,
      profileLogin,
      profileCenter,
      profileList,
      profileShopList
    }
	}
</script>

<style>
  
</style>
