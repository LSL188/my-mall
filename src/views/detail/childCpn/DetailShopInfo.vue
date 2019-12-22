<template>
  <div class="detail-shop-info">
    <!-- <p>{{shopInfos}}</p> -->
    <div class="top">
      <img :src="shopInfos.shopLogo" alt="" />
      <span>{{ shopInfos.name }}</span>
    </div>
    <div class="middle">
      <div class="left">
        <div>
          <p class="num">{{ shopInfos.cSells | sellCountFilter }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p class="num">{{ shopInfos.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="(item, i) in shopInfos.score" :key="i">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-beter': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bottom">
      <p>进店逛逛</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopInfos: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellCountFilter(value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    }
  }
};
</script>

<style scoped lang="less">
.detail-shop-info {
  padding: 20px 10px;
  .top {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      border: 1px solid #ddd;
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }
    span {
      color: #666;
    }
  }
  .middle {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .left {
      display: flex;
      text-align: center;
      div {
        font-size: 12px;
        .num {
          padding: 0 10px;
          font-size: 20px;
        }
      }
    }
    .right {
      border-left: 1px solid #eee;
      font-size: 14px;
      text-align: center;
      padding-left: 10px;
      td {
        padding: 5px;
      }
      .score {
        color: #5ea732;
      }
      .score-beter {
        color: #f12e3a;
      }
      .better span {
        background-color: #5ea732;
        color: #fff;
        text-align: center;
      }
      .better-more span {
        background-color: #f12e3a;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    p {
      background-color: #eee;
      width: 120px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #666;
      font-size: 14px;
      border-radius: 10px;
    }
  }
}
</style>
