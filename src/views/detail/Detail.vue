<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleChange="detailNavChange"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="detail-scroll"
      ref="scroll"
      @scroll="titleScroll"
      :probeType="3"
    >
      <detail-swiper :top-imgs="topImages"></detail-swiper>
      <!-- <ul>
     <li v-for="(item, i) in $store.state.cartList" :key="i">{{item}}</li>
   </ul> -->
      <detail-base-info :goods-infos="goodsInfo"></detail-base-info>
      <detail-shop-info :shop-infos="shopInfo"></detail-shop-info>
      <detail-goods-info
        :goods-img-infos="goodsImgInfo"
        @detailImgLoad="detailLoad"
      ></detail-goods-info>
      <detail-params-info
        :goods-params-info="goodsParams"
        ref="params"
      ></detail-params-info>
      <detail-comment
        :goods-comments="goodsComment"
        ref="comment"
      ></detail-comment>
      <goods :goodslists="goodsRecommend" ref="recommend"></goods>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
    <detail-footer-bar @addToCart="addCart"></detail-footer-bar>
    <toast></toast>
  </div>
</template>

<script>
import DetailNavBar from "./childCpn/DetailNavBar";
import DetailSwiper from "./childCpn/DetailSwiper";
import DetailBaseInfo from "./childCpn/DetailBaseInfo";
import DetailShopInfo from "./childCpn/DetailShopInfo";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childCpn/DetailGoodsInfo";
import DetailParamsInfo from "./childCpn/DetailParamsInfo";
import DetailComment from "./childCpn/DetailComment";
import Goods from "components/content/goods/Goods";
import DetailFooterBar from "./childCpn/DetailFooterBar";
import Toast from 'components/common/toast/Toast'

import {
  getDetailData,
  GoodsInfo,
  Shop,
  Params,
  getRecommendData
} from "network/detail";

import { allItemImgLoadMixin, backTopMixin } from "common/mixin";
import { mapActions } from "vuex";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [], //轮播图数据
      goodsInfo: {},
      shopInfo: {},
      goodsImgInfo: {},
      goodsParams: {},
      goodsComment: {},
      goodsRecommend: [],
      titleTopYs: [],
      currentIndex: 0
    };
  },
  mixins: [allItemImgLoadMixin, backTopMixin],
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    Goods,
    DetailFooterBar,
    Toast
  },
  created() {
    this.iid = this.$route.params.iid;
    this._getDetailData();
    this._getRecommendData();
  },
  mounted() {
    // console.log("detail-mixin");
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.allItemImgLoad);
  },
  methods: {
    // 获取详情页数据
    _getDetailData() {
      getDetailData(this.iid).then(res => {
        // console.log(res);
        const data = res.result;
        // 1.获取轮播图数据
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages)
        // 2.获取标题商品展示数据
        this.goodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // console.log(this.goodsInfo);
        // 3.店家信息数据
        this.shopInfo = new Shop(data.shopInfo);
        // console.log(this.shopInfo);
        // 4.详情页的商品图片的数据
        this.goodsImgInfo = data.detailInfo;
        // console.log(this.goodsImgInfo)
        // 5.详情页的商品参数数据
        this.goodsParams = new Params(data.itemParams);
        // console.log(this.goodsParams)
        // 6.详情页的商品评价
        if (data.rate.cRate !== 0) {
          this.goodsComment = data.rate.list[0];
        }
        // console.log(this.goodsComment)
      });
    },
    // 详情页的商品图片加载完毕触发的事件
    detailLoad() {
      // console.log('111')
      // this.$refs.scroll.refresh();
      this.newRefresh();
      // this.titleTopYs = [];
      this.titleTopYs.push(0);
      this.titleTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.titleTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.titleTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      // console.log(this.titleTopYs); //[0, 5924, 6734, 6930]
    },
    // 详情页的推荐接口
    _getRecommendData() {
      getRecommendData().then(res => {
        // console.log(res)
        this.goodsRecommend = res.data.list;
        // console.log(this.goodsRecommend)
      });
    },
    // 接收detail-nav-bar组件传递过来的事件
    detailNavChange(index) {
      console.log(index);
      this.$refs.scroll.scrollTo(0, -this.titleTopYs[index], 100);
    },
    // 接收scroll组件传递过来的事件
    titleScroll(position) {
      // console.log(position);
      const positionY = -position.y; //取正数
      let length = this.titleTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          (this.currentIndex !== i &&
            i < length - 1 &&
            positionY >= this.titleTopYs[i] &&
            positionY < this.titleTopYs[i + 1]) ||
          (i === length - 1 && positionY >= this.titleTopYs[i])
        ) {
          this.currentIndex = i;
          // console.log(this.currentIndex); //1
          // 让detail的nav文字随着滚动区域的位置变颜色
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 回到顶部
      this.isShowBackTop = positionY > 1000;
    },
    ...mapActions(["addCartAction"]),
    // 接收detail-footer-bar组件传递过来的事件
    addCart() {
      // console.log('detail add')
      // 1.获取购物车需要展示的商品的数据
      const cartInfo = {};
      cartInfo.iid = this.iid;
      cartInfo.img = this.topImages[0];
      cartInfo.desc = this.goodsInfo.desc;
      cartInfo.price = this.goodsInfo.price;
      cartInfo.lowNowPrice = this.goodsInfo.lowNowPrice;
      // console.log(cartInfo);
      // 2.将商品添加到购物车
      // this.$store.commit('addCart', cartInfo)
      // this.$store.dispatch("addCartAction", cartInfo).then(res => {
      //   console.log(res)
      // })
      this.addCartAction(cartInfo).then(res => {
        console.log(res);
        this.$toast.show(res, 3000)
      });
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  .detail-nav-bar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .detail-scroll {
    height: calc(100% - 44px);
  }
}
</style>
