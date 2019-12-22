<template>
  <div v-if="Object.keys(goodsImgInfos).length !== 0" class="detail-goods-info">
    <!-- {{ goodsImgInfos }} -->
    <p>{{ goodsImgInfos.desc }}</p>
    <p>{{ goodsImgInfos.detailImage[0].key }}</p>
    <img
      :src="item"
      v-for="(item, i) in goodsImgInfos.detailImage[0].list"
      :key="i"
      alt=""
      @load="imgLoad"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      imgLength: 0
    };
  },
  props: {
    goodsImgInfos: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad() {
      if (++this.count === this.imgLength) {
        this.$emit("detailImgLoad");
      }
    }
  },
  watch: {
    goodsImgInfos() {
      this.imgLength = this.goodsImgInfos.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped lang="less">
.detail-goods-info {
  border-top: 5px solid #eee;
  border-bottom: 5px solid #eee;
  padding: 0 10px;
  p {
    color: #666;
    font-size: 14px;
  }
  img {
    width: 100%;
  }
}
</style>
