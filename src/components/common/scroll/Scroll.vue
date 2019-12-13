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
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const options = {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    };
    this.scroll = new BScroll(this.$refs.wrapper, options);
    // console.log(this.scroll)
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // console.log("上拉加载更多");
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // console.log('120')
      this.scroll && this.scroll.refresh()
    }
  }
};
</script>
