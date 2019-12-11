<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item, i) in recommends" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <p>{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.home-recommend {
  display: flex;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  .recommend-item {
    flex: 1;
    img {
      width: 70px;
      height: 70px;
    }
  }
}
</style>
