<template>
  <div class="wrapper" ref="wrapper">
    <div class="wrapper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    const options = {
      click: true,
      probeType: 3,
      pullUpLoad:true
    };
    this.scroll = new BScroll(this.$refs.wrapper, options);
    this.scroll.on("scroll", position => {
      console.log(position);
    });
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })
  }
};
</script>
