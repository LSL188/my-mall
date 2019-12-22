<template>
  <div class="check-button" @click="checkClick">
    <img src="~assets/img/cart/tick.svg" :class="{ active: isChecked }" alt=""/>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
      checkClick() {
          this.$emit('checkClick')
      }
  }
};
</script>

<style scoped lang="less">
.check-button {
  img {
    border-radius: 50%;
    border: 2px solid #eee;
  }
  .active {
    background-color: @navColor;
    border: 2px solid @navColor;
  }
}
</style>
