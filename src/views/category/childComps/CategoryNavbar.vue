<template>
  <div class="navbar">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
    
  </div>
  
</template>

<script>
  import navBar from "components/common/navbar/NavBar";
  export default {
    name:'CategoryNavbar',
    components:{
      navBar
    }
}
</script>
<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  /* box-shadow: 2px 2px 5px #fff; */
  border-bottom: 2px solid #fff;
}
</style>