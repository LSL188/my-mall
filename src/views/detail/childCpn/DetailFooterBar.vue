<template>
  <div class="detail-footer-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      addToCart() {
          this.$emit('addToCart')
      }
  }
};
</script>

<style scoped lang="less">
.detail-footer-bar {
  height: 58px;
  position: relative;
  background-color: #fff;
  bottom: 58px;
  display: flex;
  text-align: center;
  .bar-item {
    flex: 1;
    display: flex;
    div {
      flex: 1;
    }
  }
  .bar-left {
    .text {
      font-size: 13px;
    }
    .icon {
      display: block;
      width: 22px;
      height: 22px;
      margin: 10px auto 3px;
      background: url("~assets/img/detail/detail_bottom.png") center/100%;
    }
    .service {
      background-position: 0 -54px;
    }
    .shop {
      background-position: 0 -98px;
    }
    .select {
      background-position: 0 0;
    }
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
    .cart {
      background-color: #ffe817;
      color: #333;
    }
    .buy {
      background-color: #f69;
    }
  }
}
</style>
