<template>
  <div id="home" class="wrapper">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tabControl :titles="['流行','新款','精选']"
    class="tab-control1"
    @tabClick='tabClick'
    ref='tabControl1'
    v-show='isShowTab'
    ></tabControl>
    <scroll class="content"
    ref='scroll'
    :probeType='3'
    @scroll='contentScroll'
    @pullingUp='loadMore'
    :pullUpLoad='true'>
      <homeSwiper :banners='banners' @swiperImageLoad='swiperImageLoad'></homeSwiper>
      <recommendView :recommends='recommends'></recommendView>
      <featureView></featureView>
      <tabControl :titles="['流行','新款','精选']"
      @tabClick='tabClick'
      ref='tabControl2'></tabControl>
      <goodList :goodListItem='showGoods'></goodList>
    </scroll>
    <back-top @click.native='backClick' v-show="isShowBackTop"></back-top>
  </div>

</template>

<script>
  import navBar from '../../components/common/navbar/NavBar.vue'
  import tabControl from 'components/context/tabControl/TabControl.vue'
  import goodList from 'components/context/goods/GoodList.vue'
  import scroll from 'components/common/scroll/Scroll'

  import homeSwiper from './childComps/HomeSwiper.vue'
  import recommendView from './childComps/RecommendView.vue'
  import featureView from './childComps/FeatureView.vue'
  import backTop from 'components/context/backTop/BackTop'

  import {getHomeMultidata,getHomeGoods} from 'network/home.js'
  import {debounce} from 'common/utils'
  import {itemListenerMixin} from 'common/mixin'

	export default {
		name:'Home',
    components:{
      navBar,
      tabControl,
      goodList,
      scroll,


      homeSwiper,
      recommendView,
      featureView,
      backTop
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isShowTab:false,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mixins:[itemListenerMixin],
    mounted(){
      const refresh =debounce(this.$refs.scroll.refresh,200)

      this.itemImgListener= ()=>{
        refresh()
        }
      this.$bus.$on('itemImageLoad',this.itemImgListener)
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,1)
      this.$refs.scroll.refresh()

    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImageLoad',this.itemImgListener)
      // console.log('111')
    },
    methods:{

      // 事件监听相关的方法

      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
        this.$refs.tabControl1.currentIndex=index
        this.$refs.tabControl2.currentIndex=index
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        this.isShowBackTop=(-position.y)>1000
        this.isShowTab = (-position.y) >this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)

      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      // debounce(func,delay){
      //   let timer=null
      //   return function(...args){
      //     if(timer) clearTimeout(timer)
      //      timer = setTimeout(()=>{
      //       func.apply(this,args)
      //     },delay)
      //   }

      // },
      // 网络请求相关的方法
      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page =this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1
          this.$refs.scroll.finishPullUp()
        })

      }
    }
	}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  /*  position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
 /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
  .content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>
