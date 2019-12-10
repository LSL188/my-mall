<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="middle"><slot name="middle"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.nav-bar {
  height: 44px;
  line-height: 44px;
  background-color: pink;
  color: #fff;
  display: flex;
  text-align: center;
  .left,
  .right {
      width: 60px;
  }
  .middle {
    flex: 1;
  }
}
</style>
