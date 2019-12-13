<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, i) in titles"
      :key="i"
      @click="itemClick(i)"
      :class="{ active: currentIndex === i }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    itemClick(index) {
      // console.log(index)
      this.currentIndex = index
      this.$emit('tabControlClick', index)
    }
  }
};
</script>

<style scoped lang="less">
.tab-control {
  background-color: #fff;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  .tab-control-item {
    flex: 1;
    color: #666;
    span {
       padding: 0 10px 5px 10px;
    }
  }
}

.active {
  span {
    color: @navColor;
    border-bottom: 2px solid @navColor;
  }
}
</style>
