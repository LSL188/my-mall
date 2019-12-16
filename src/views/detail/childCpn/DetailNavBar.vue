<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="middle" class="title">
        <div class="title-item" v-for="(item, i) in title" :key="i" @click="titleClick(i)" :class="{active: currentIndex === i}">
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
      titleClick(index) {
          this.currentIndex = index
      },
      back() {
          this.$router.go(-1)
      }
  }
};
</script>

<style scoped lang="less">
img {
  margin-top: 10px;
}
.title {
  display: flex;
  font-size: 14px;
  .title-item {
    flex: 1;
  }
}
.active {
    color: @navColor;
}
</style>