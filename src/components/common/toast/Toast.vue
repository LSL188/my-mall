<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message="默认文字", duration=2000) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
            this.isShow = false
            this.message = ''
        }, duration)
    }
  }
};
</script>

<style scoped lang="less">
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  z-index: 10;
}
</style>
