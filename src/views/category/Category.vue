<template>
	<div id="category">
    <categoryNavbar class="catNav"></categoryNavbar>
    <categoryContent :titleList='titleList' 
    :titleContent="titleContent"
    @getTitleContentData='getTitleContentData'
    class="catMain"></categoryContent>
  </div>
</template>

<script>
  import categoryNavbar from './childComps/CategoryNavbar'
  import categoryContent from "./childComps/CategoryContent";
  import { getCategoryData ,getCategorySubData } from "network/category.js"

	export default {
		name:'Category',
    components:{
      categoryNavbar,
      categoryContent
    },
    data(){
      return {
        titleList:null,
        titleContent:null
      }
    },
    created(){
    getCategoryData().then(res=>{
      this.titleList=res.data.category.list;
      getCategorySubData(this.titleList[0].maitKey).then(res=>{
        this.titleContent=res.data.list;
      })
    })
    },
    methods:{
      getTitleContentData(index){
        getCategorySubData(this.titleList[index].maitKey).then(res=>{
        this.titleContent=res.data.list;
        console.log(index)
      })
      }
    }
	}
</script>

<style lang='less' scoped>
#category{
  height: 100vh;
  overflow: hidden;
  .catMain{
    // height: calc(100% -49px -44px);
    height:calc(100% - 44px - 49px);
    
  }
  .catNav{
    position: relative;
    z-index: 10;
  }
}
</style>
