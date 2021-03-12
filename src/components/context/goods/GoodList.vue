<template>
  <div class="goods">
    <goodListItem v-for='(item,index) in goodListItem' :key='index' :goodsItem='item'></goodListItem>
  </div>
</template>

<script>
  import goodListItem from './GoodListItem.vue'
  export default {
    name:'GoodList',
    props:{
      goodListItem:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      goodListItem
    }
  }
</script>

<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
