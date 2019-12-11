<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend :recommends="recommend"></home-recommend>
    <home-week></home-week>
    <tab-control :titles="['流行', '新款', '精选']" class="home-tab-control"></tab-control>

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

import { getHomeData } from "network/home";
export default {
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  props: {},
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeWeek,
    TabControl
  },
  created() {
    this._getHomeData();
  },
  mounted() {},
  methods: {
    _getHomeData() {
      getHomeData().then(res => {
        console.log(res);
        this.banner = res.data.banner.list;
        // console.log(this.banner);
        this.recommend = res.data.recommend.list;
        // console.log(this.recommend);
      });
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
  }
}
</style>
