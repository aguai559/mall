import {debounce} from 'common/utils'
import backTop from 'components/context/backTop/BackTop'
export const itemListenerMixin = {

  data(){
    return {
      itemImgListener:null,

      // refresh:null
    }
  },
  mounted(){
    const refresh =debounce(this.$refs.scroll.refresh,200)

    this.itemImgListener= ()=>{
      refresh()
      }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    // console.log('我是混入中的内容')
  }
}

export const backTopMixin ={
  components:{
    backTop
  },
  data(){
    return {
      isShowBackTop:false
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    }
  }
}
