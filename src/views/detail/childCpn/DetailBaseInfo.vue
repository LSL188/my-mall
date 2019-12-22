<template>
  <div v-if="Object.keys(goodsInfos).length !== 0" class="detail-base-info">
    <div class="title">{{ goodsInfos.desc }}</div>
    <div class="price-box">
      <span class="price">{{ goodsInfos.price }}</span>
      <del>{{ goodsInfos.oldPrice }}</del>
      <span v-if="goodsInfos.discountDesc" class="discount">{{
        goodsInfos.discountDesc
      }}</span>
    </div>
    <div class="count">
      <span>{{ goodsInfos.columns[0] }}</span>
      <span>{{ goodsInfos.columns[1] }}</span>
      <span>{{
        goodsInfos.services[goodsInfos.services.length - 1].name
      }}</span>
    </div>
    <div class="delay-box">
      <span
        class="yan"
        v-for="(item, i) in goodsInfos.services.length - 1"
        :key="i"
      >
        <img :src="goodsInfos.services[i].icon" alt="" />
        <span>{{ goodsInfos.services[i].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsInfos: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="less">
.detail-base-info {
  padding: 10px 10px 0 10px;
  border-bottom: 5px solid #eee;
  .price-box {
    margin: 10px 0 10px 0;
    position: relative;
    .price {
      font-size: 20px;
      color: @navColor;
    }
    del {
      margin: 0 5px;
      font-size: 12px;
      color: #999;
    }
    .discount {
      background-color: @navColor;
      border-radius: 10px;
      width: 35px;
      height: 20px;
      line-height: 20px;
      color: #fff;
      text-align: center;
      font-size: 12px;
      display: inline-block;
      position: absolute;
      top: -5px;
    }
  }
  .count {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #666;
    }
  }
  .delay-box {
    margin-top: 10px;
    border-top: 1px solid #eee;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    .yan {
      margin: 20px 0;
      img {
        width: 14px;
        height: 14px;
        vertical-align: middle;
      }
    }
  }
}
</style>
