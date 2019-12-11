<template>
  <div class="home">
    <nav-bar>
      <div slot="middle">购物街</div>
    </nav-bar>
    <div class="content">
      <span>150</span>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {};
  },
  props: {},
  components: {
    NavBar
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.home {
  .content {
    background-color: @bgHome;
    span {
        color: @navColor;
    }
  }
}
</style>
