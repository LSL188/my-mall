import { debounce } from "./utils";
import BackTop from "components/content/backtop/BackTop";

export const allItemImgLoadMixin = {
  data() {
    return {
      allItemImgLoad: null,
      newRefresh: null
    };
  },
  mounted() {
    // 监听图片加载完成,调用防抖函数
    this.newRefresh = debounce(this.$refs.scroll.refresh, 500);
    this.allItemImgLoad = () => {
      //   console.log("我是img finish");
      this.newRefresh();
    };
    this.$bus.$on("itemImgLoad", this.allItemImgLoad);
    // console.log("我是mixin");
  }
};

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false
    };
  },
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    }
  }
};
