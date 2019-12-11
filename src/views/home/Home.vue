<template>
  <div class="home">
    <nav-bar>
      <div slot="middle">购物街</div>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend :recommends="recommend"></home-recommend>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childCpn/HomeSwiper'
import HomeRecommend from './childCpn/HomeRecommend'

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
    HomeRecommend
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
        console.log(this.banner);
        this.recommend = res.data.recommend.list;
        console.log(this.recommend);
      });
    }
  }
};
</script>

<style scoped lang="less">
.home {
}
</style>
