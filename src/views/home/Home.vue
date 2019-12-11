<template>
  <div class="home">
    <nav-bar>
      <div slot="middle">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="(item, i) in banner" :key="i">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";

import { getHomeData } from "network/home";
export default {
  data() {
    return {
      banner: {},
      recommend: {}
    };
  },
  props: {},
  components: {
    NavBar,
    Swiper,
    SwiperItem
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
