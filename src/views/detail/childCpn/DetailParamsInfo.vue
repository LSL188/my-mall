<template>
  <div
    v-if="Object.keys(goodsParamsInfo).length !== 0"
    class="detail-params-info"
  >
    <!-- {{ goodsParamsInfo }} -->
    <table v-for="(table, i) in goodsParamsInfo.tables" :key="i">
      <tr v-for="(tr, i1) in table" :key="i1">
        <td v-for="(td, i2) in tr" :key="i2">{{ td }}</td>
      </tr>
    </table>

    <table class="params">
      <tr v-for="(item, i) in goodsParamsInfo.info.set" :key="i">
        <td class="key">{{ item.key }}</td>
        <td class="value">{{ item.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="goodsParamsInfo.image.length !== 0">
      <img :src="goodsParamsInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsParamsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="less">
.detail-params-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
    }
    .key {
      width: 95px;
    }
    .value {
      color: #eb4868;
    }
  }
  .params {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
