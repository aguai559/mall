<template>
  <div id="dedail">
    <detail-NavBar class='detail-nav' @titleClick='titleClick' ref='nav'></detail-NavBar>
    <scroll class="content" ref='scroll' @scroll='contentScroll' :probeType='3'>
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods='goods'/>
      <detail-shop-info :shop='shop'/>
      <detail-images-info :images-info="detailsInfo" @imgLoad="imgLoad" />
      <detail-param-info ref='param' :param-info="paramInfo"/>
      <detail-comment-info ref='comment' :comment-info='commentInfo'/>
      <good-list ref='recommend' :goodListItem='recommend'/>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'/>
    <back-top v-show="isShowBackTop" @click.native='backClick'></back-top>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar.vue'
  import DetailSwiper from './childComps/DetailSwiper.vue'
  import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
  import DetailShopInfo from './childComps/DetailShopInfo.vue'
  import DetailImagesInfo from './childComps/DetailImagesInfo.vue'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import Scroll from 'components/common/scroll/Scroll'
  import GoodList from 'components/context/goods/GoodList'
  import DetailBottomBar from './childComps/DetailBottomBar.vue'

  import {getDetail,Goods,getRecommend,Shop,GoodsParam} from 'network/detail.js'
  import {debounce} from 'common/utils'
  import {itemListenerMixin,backTopMixin} from 'common/mixin'
  import {mapActions} from 'vuex'

  export default {
    name:'Detail',
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailsInfo:{},
        paramInfo: {},
        commentInfo:{},
        recommend:[],
        themeTopYs:[],
        getThemeTopY:null

      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImagesInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodList,
      DetailBottomBar,

      Scroll
    },
    mixins:[itemListenerMixin,backTopMixin],
    created() {
      this.iid=this.$route.params.iid

      getDetail(this.iid).then((res)=>{
        const data =res.result
        this.topImages=data.itemInfo.topImages
        this.goods =new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop =new Shop(data.shopInfo)

        this.detailsInfo = data.detailInfo

        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        if(data.rate.cRate !==0){
          this.commentInfo =data.rate.list[0]
          // console.log(Object.keys(this.commentInfo).length)

        }

      })
      getRecommend().then(res=>{
        this.recommend =res.data.list
        // console.log(res.data.list)
      })
      this.getThemeTopY = debounce(()=>{
        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)
      })
    },

    destroyed() {
      this.$bus.$off('itemImageLoad',this.itemImgListener)
      // console.log('...')
    },
    methods:{
      ...mapActions(['addCart']),
      addToCart(){
        // 1.获取购物车需要展示的信息
        const product ={}
        product.image =this.topImages[0]
        product.title=this.goods.title
        product.desc=this.goods.desc
        product.price=this.goods.realPrice
        product.iid=this.iid

        // 2.将商品添加到购物车里(1.Promise 2.mapActions)
        // this.$store.commit('addCart',product)
        this.$store.dispatch('addCart',product).then(res=>{
          this.$toast.show(res,2000)
        })
        // this.addCart(product).then(res=>{
        //   console.log(this.$toast)
        //   this.$toast.show(res,2000)

        // })
      },
      imgLoad(){
        this.$refs.scroll.refresh()
        this.getThemeTopY()
      },
      titleClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      contentScroll(position){
        const positionY= -position.y

        let length=this.themeTopYs.length
        for(let i=0;i<length;i++){
          if(this.currentIndex !== i &&(i<length-1 && positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1]) || (i===length-1 && positionY>=this.themeTopYs[i])){
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        this.isShowBackTop =-position.y >1000
      }
    }
  }
</script>

<style scoped="scoped">
  #dedail{
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;

  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    background-color: #fff;
    /* height: calc(100% - 44px); */
    position: fixed;
    left: 0;
    bottom: 0;
    top: 44px;
    bottom: 49px;
  }
</style>
