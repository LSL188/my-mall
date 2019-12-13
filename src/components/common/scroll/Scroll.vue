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
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    const options = {
      click: true,
      probeType: this.probeType,
      pullUpLoad: true
    };
    this.scroll = new BScroll(this.$refs.wrapper, options);
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }
    this.scroll.on("pullingUp", () => {
      // console.log("上拉加载更多");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>
