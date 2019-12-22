<template>
  <div class="shop-cart-list">
    <scroll class="scroll-shopcart" ref="scroll">
      <shop-cart-list-item v-for="(item, i) in cartListGetters" :key="i" :cart-item="item"></shop-cart-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import ShopCartListItem from './ShopCartListItem'
export default {
  computed: {
    ...mapGetters(["cartListGetters"])
  },
  components: {
    Scroll,
    ShopCartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped lang="less">
.shop-cart-list {
  height: calc(100% - 44px - 49px - 40px);
  .scroll-shopcart {
    height: 100%;
    overflow: hidden;
  }
}
</style>
