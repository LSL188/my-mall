<template>
  <div class="goods-item" @click="goodsItemClick">
    <img v-lazy="showImg" alt="" @load="imgLoad"/>
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
      this.$bus.$emit('itemImgLoad') //之前只有home页面用goods组件,现在detail页面也要用,不改变此处代码,让离开home页面时销毁

      //之前只有home页面用goods组件,现在detail页面也要用,可以判断路由
      // if (this.$route.path.indexOf('/home')) {
      //   this.$bus.$emit('itemImgLoad')
      // } else if (this.$route.path.indexOf('/detail')) {
      //   this.$bus.$emit('detailItemImgLoad')
      // }
    },
    goodsItemClick() {
      this.$router.push('/detail/' + this.goods.iid)
    }
  },
  computed: {
    showImg() {
      return this.goods.image || this.goods.show.img
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
