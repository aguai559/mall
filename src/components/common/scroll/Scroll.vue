<template>
  <div ref='wrapper'>
    <div ref='content'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import BScroll from "@better-scroll/core";
  // import Pullup from '@better-scroll/pull-up'

  export default{
    name:'Scroll',
    props:{
      probeType:{
        type:Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      // BScroll.use(Pullup)
      this.scroll=new BScroll(this.$refs.wrapper,{
        probeType: this.probeType,
        click: true,
        mouseWheel: true,
        observeDOM: true,
        pullUpLoad:this.pullUpLoad
      })
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
        })
      }

      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }

    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
         this.scroll.finishPullUp()
      },
      refresh(){
         this.scroll && this.scroll.refresh()
         // console.log('...')
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }

</script>

<style>
</style>
