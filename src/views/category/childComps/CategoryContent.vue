<template>
  <div class="catContent">
    <scroll class="scrollLeft" ref="scrollLeft">
      <cateGoryLeft class="catLeft">
        <div
          v-for="(item, index) in titleList"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="indexClick(index)"
        >
          <span>{{ item.title }}</span>
        </div>
      </cateGoryLeft>
    </scroll>
    <scroll class="scrollRight" ref='scrollRight'>
      <cateGoryRight class="catRight">
        <categoryGoods
          class="catGoods"
          v-for="(item, index) in titleContent"
          :key="index"
        >
          <div slot="img">
            <img :src="item.image" alt="" />
          </div>
          <span slot="title">{{ item.title }}</span>
        </categoryGoods>
      </cateGoryRight>
    </scroll>
  </div>
</template>

<script>
import cateGoryLeft from "./CategoryLeft";
import cateGoryRight from "./CategoryRight";
import categoryGoods from "./CategoryGoods";

import scroll from "components/common/scroll/Scroll";

export default {
  name: "CategoryContent",
  components: {
    cateGoryLeft,
    cateGoryRight,
    categoryGoods,
    scroll,
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titleList: {
      type: Array,
      default() {
        return [];
      },
    },
    titleContent: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    // this.$refs.scrollRight.refresh();
  },
  updated() {
    // this.$refs.scrollLeft.refresh();
  },
  methods: {
    indexClick(index) {
      this.currentIndex = index;
      this.$emit("getTitleContentData", index);
      this.$refs.scrollRight.scrollTo(0,0,0);
      // this.$refs.scroll.refresh()
      // console.log(this.$refs.scrollRight)
    },
  },
};
</script>
<style lang='less' scoped>
.active {
  background-color: #fff;
  color: pink;
}
.catContent {
  display: flex;
  .scrollLeft {
    width: 30%;
    height: 100%;
    .catLeft {
      // width: 30%;

      background-color: #ccc;
      div {
        height: 50px;

        span {
          font-size: 19px;
          display: block;
          text-align: center;
          line-height: 50px;
          font-weight: 700;
        }
      }
    }
  }
  .scrollRight {
    width: 70%;
    height: 100%;
    .catRight {
      height: 100%;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .catGoods {
        width: 47%;
        img {
          width: 100%;
        }
        span {
          display: block;
          text-align: center;
          color: orange;
          font-size: 20px;
        }
      }
    }
  }
}
</style>