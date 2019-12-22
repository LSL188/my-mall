<template>
  <div class="shop-cart">
    <nav-bar class="shopcart-nav">
      <div slot="middle">购物车({{ cartlLength }})</div>
    </nav-bar>
    <shop-cart-list></shop-cart-list>
    <shop-cart-bottom-bar></shop-cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ShopCartList from "./childCpn/ShopCartList";
import ShopCartBottomBar from './childCpn/ShopCartBottomBar'
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    ShopCartList,
    ShopCartBottomBar
  },
  computed: {
    ...mapGetters(["cartlLength"])
  }
};
</script>

<style scoped lang="less">
.shop-cart {
  height: 100vh;
  .shopcart-nav {
    background-color: @navColor;
    color: #fff;
  }
}
</style>
