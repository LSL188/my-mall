<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend :recommends="recommend"></home-recommend>
    <home-week></home-week>
    <tab-control :titles="['流行', '新款', '精选']" class="home-tab-control" @tabControlClick="homeTabClick"></tab-control>
    <!-- <goods :goodslists="goodslist['pop'].list"></goods> -->
    <goods :goodslists="showGoodsType"></goods>

    <ul>
      <li>12</li>
      <li>22</li>
      <li>32</li>
      <li>42</li>
      <li>52</li>
      <li>42</li>
      <li>52</li>
      <li>62</li>
      <li>72</li>
      <li>82</li>
      <li>52</li>
      <li>42</li>
      <li>52</li>
      <li>62</li>
      <li>72</li>
      <li>82</li>
      <li>52</li>
      <li>42</li>
      <li>52</li>
      <li>62</li>
      <li>72</li>
      <li>82</li>
      <li>52</li>
      <li>42</li>
      <li>52</li>
      <li>62</li>
      <li>72</li>
      <li>82</li>
      <li>92</li>
      <li>102</li>
      <li>62</li>
      <li>72</li>
      <li>82</li>
      <li>92</li>
      <li>102</li>
      <li>112</li>
      <li>122</li>
      <li>132</li>
      <li>142</li>
      <li>152</li>
      <li>162</li>
      <li>172</li>
      <li>182</li>
      <li>192</li>
      <li>202</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childCpn/HomeSwiper";
import HomeRecommend from "./childCpn/HomeRecommend";
import HomeWeek from "./childCpn/HomeWeek";
import TabControl from "components/content/tabcontrol/TabControl";
import Goods from 'components/content/goods/Goods'

import { getHomeData, getHomeGoods } from "network/home";
export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goodslist: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    };
  },
  props: {},
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeWeek,
    TabControl,
    Goods
  },
  created() {
    this._getHomeData();
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')
  },
  computed: {
      showGoodsType() {
          return this.goodslist[this.currentType].list
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
        const page = this.goodslist[type].page + 1
        getHomeGoods(type, page).then(res => {
            // console.log(res)
            this.goodslist[type].list.push(...res.data.list)
            this.goodslist[type].page += 1
        })
    },
    // 修改pop写死的值，动态接收tabControl子组件的点击事件传来的index
    homeTabClick(i) {
        // console.log(i)
        if (i === 0) {
            this.currentType = 'pop'
        } else if(i === 1) {
            this.currentType = 'new'
        } else {
            this.currentType = 'sell'
        }
        // console.log(this.currentType)
    }
  }
};
</script>

<style scoped lang="less">
.home {
  padding-top: 44px;
  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .home-tab-control {
      position: sticky;
      top: 44px;
      z-index: 2;
  }
}
</style>
