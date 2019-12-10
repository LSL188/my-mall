<template>
  <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="isActiveColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
      path: String,
      activeColor:{
          type: String,
          default: 'red'
      }
  },
  computed: {
      isActive() {
          return this.$route.path.indexOf(this.path) !== -1
      },
      isActiveColor() {
          return this.isActive? {color: this.activeColor} : {}
      }
  },
  methods: {
      itemClick() {
          this.$router.replace(this.path)
      }
  }
};
</script>

<style scoped lang="less">
  .tab-bar-item {
    flex: 1;
    font-size: 12px;
    img {
        width: 20px;
        height: 20px;
        margin: 5px 0 5px 0;
        vertical-align: middle;
    }
  }
</style>
