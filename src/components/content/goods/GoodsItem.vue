<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="goods.show.img" alt="" @load="imgLoad"/>
    <div>
      <p>{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      // console.log('load')
      this.$bus.$emit('itemImgLoad')
    },
    goodsItemClick() {
      this.$router.push('/detail/' + this.goods.iid)
    }
  }
};
</script>

<style scoped lang="less">
.goods-item {
  padding-bottom: 40px;
  position: relative;
  img {
    width: 100%;
    border-radius: 5px;
  }
  div {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
      overflow: hidden;
    }
    .price {
      color: @navColor;
      margin-right: 20px;
    }
  }
}
</style>
