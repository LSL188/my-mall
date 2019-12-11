<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="middle">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend :recommends="recommend"></home-recommend>
    <home-week></home-week>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childCpn/HomeSwiper'
import HomeRecommend from './childCpn/HomeRecommend'
import HomeWeek from './childCpn/HomeWeek'

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
    HomeWeek
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
}
</style>
