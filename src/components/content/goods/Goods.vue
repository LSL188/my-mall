<template>
  <div class="goods">
    <!-- 所有商品列表的数据 -->
    <!-- <goods-item>{{goodslists}}</goods-item> -->

    <!-- 将列表中具体的item的数据，传给goods-item -->
    <goods-item
      :goods="item"
      v-for="(item, i) in goodslists"
      :key="i"
      class="goods-item"
    ></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  props: {
    goodslists: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsItem
  }
};
</script>

<style scoped lang="less">
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
  .goods-item {
    width: 48%;
  }
}
</style>
