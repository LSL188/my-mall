<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <!-- 吸顶时替换用 -->
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control-fixed"
      @tabControlClick="homeTabClick"
      ref="tabControlOne"
      v-show="isTabControlFixed"
    ></tab-control>

    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      @scroll="wrapperScroll"
      :pull-up-load="true"
      @pullingUp="wrapperPullUp"
    >
      <home-swiper
        :banners="banner"
        @swiperImgLoad="homeSwiperImgLoad"
      ></home-swiper>
      <home-recommend :recommends="recommend"></home-recommend>
      <home-week></home-week>
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="home-tab-control"
        @tabControlClick="homeTabClick"
        ref="tabControl"
      ></tab-control>
      <!-- <goods :goodslists="goodslist['pop'].list"></goods> -->
      <goods :goodslists="showGoodsType"></goods>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCpn/HomeSwiper";
import HomeRecommend from "./childCpn/HomeRecommend";
import HomeWeek from "./childCpn/HomeWeek";
import TabControl from "components/content/tabcontrol/TabControl";
import Goods from "components/content/goods/Goods";
import Scroll from "components/common/scroll/Scroll";

import { getHomeData, getHomeGoods } from "network/home";

import { allItemImgLoadMixin, backTopMixin } from "common/mixin"
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goodslist: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      TabControlTop: 0,
      isTabControlFixed: false,
      saveY: 0,
    };
  },
  mixins: [allItemImgLoadMixin, backTopMixin],
  props: {},
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeWeek,
    TabControl,
    Goods,
    Scroll
  },
  created() {
    // 请求轮播图和推荐的数据
    this._getHomeData();
    // 获取商品列表的数据
    this._getHomeGoods("pop");
    this._getHomeGoods("new");
    this._getHomeGoods("sell");
  },
  mounted() {
    // console.log('home-mixin')
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getSrollY();
    this.$bus.$off('itemImgLoad', this.allImgLoad)
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  computed: {
    showGoodsType() {
      return this.goodslist[this.currentType].list;
    }
  },
  methods: {
    // 获取轮播图和推荐的数据
    _getHomeData() {
      getHomeData().then(res => {
        // console.log(res);
        this.banner = res.data.banner.list;
        // console.log(this.banner);
        this.recommend = res.data.recommend.list;
        // console.log(this.recommend);
      });
    },
    // 获取商品列表的数据
    _getHomeGoods(type) {
      const page = this.goodslist[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res)
        this.goodslist[type].list.push(...res.data.list);
        this.goodslist[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    // 修改pop写死的值，动态接收tabControl子组件的点击事件传来的index
    homeTabClick(i) {
      // console.log(i);
      if (i === 0) {
        this.currentType = "pop";
      } else if (i === 1) {
        this.currentType = "new";
      } else {
        this.currentType = "sell";
      }
      // console.log(this.currentType);
      this.$refs.tabControl.currentIndex = i;
      this.$refs.tabControlOne.currentIndex = i;
    },
    // 显示/隐藏回到顶部
    wrapperScroll(position) {
      // console.log(position)
      // 回到顶部
      this.isShowBackTop = -position.y > 1000;
      // tab-control显示与隐藏
      this.isTabControlFixed = -position.y > this.TabControlTop;
    },
    // 上拉加载更多
    wrapperPullUp() {
      // console.log('加载更多')
      this._getHomeGoods(this.currentType);
    },
    // 监听轮播图图片加载完毕
    homeSwiperImgLoad() {
      // console.log('home img')
      this.TabControlTop = this.$refs.tabControl.$el.offsetTop;
    }
  }
};
</script>

<style scoped lang="less">
.home {
  // height: 100vh;
  padding-top: 44px;
  position: relative;
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: @navColor;
    color: #fff;
  }

  .tab-control-fixed {
    position: relative;
    z-index: 9;
  }

  .wrapper {
    // height: calc(100% - 93px);
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    // overflow: hidden;
  }
}
</style>
