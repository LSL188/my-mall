<template>
  <div class="detail-comment" v-if="Object.keys(goodsComments).length !== 0">
    <!-- {{ goodsComments }} -->
    <div class="comment-nav">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <header>
      <img :src="goodsComments.user.avatar" alt="" />
      <span>{{ goodsComments.user.uname }}</span>
    </header>
    <main>
      <span>{{ goodsComments.content }}</span>
    </main>
    <footer>
      <!-- <span>{{nowDate}}</span> -->
      <!-- <span>{{ goodsComments.created | dateFormat }}</span> -->
      <span>{{this.$dayjs(goodsComments.created*1000).format('YYYY-MM-DD HH:mm:ss') }}</span>
      <!-- <span>{{ goodsComments.created | dateFormat('YYYY-MM-DD HH:mm:ss') }}</span> -->
      <!-- <span>{{ goodsComments.created | showDate }}</span> -->
      <span>{{ goodsComments.style }}</span>
    </footer>
  </div>
</template>

<script>
// import { formatDate } from "common/utils"
// import {parseDate2Str} from 'common/common'
export default {
  data() {
    return {
      // nowDate: parseDate2Str(new Date(), 'YYYY-MM-DD HH:mm:ss'),
      // timer: ''
    }
  },
  // created() {
  //   this.timer = setInterval(()=> {
  //     this.nowDate = parseDate2Str(new Date(), 'YYYY-MM-DD HH:mm:ss')
  //   },1000)
  // },
  // beforeDestroy() {
  //   if (this.timer) {
  //     clearInterval(this.timer)
  //   }
  // },
  props: {
    goodsComments: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    // dateFormat: function(originVal) {
    //   const dt = new Date(originVal*1000);
    //   const y = dt.getFullYear();
    //   const m = (dt.getMonth() + 1 + "").padStart(2, "0");
    //   const d = (dt.getDate() + "").padStart(2, "0");

    //   const hh = (dt.getHours() + "").padStart(2, "0");
    //   const mm = (dt.getMinutes() + "").padStart(2, "0");
    //   const ss = (dt.getSeconds() + "").padStart(2, "0");

    //   return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
    // }

    // showDate(value) {
    //   const dt = new Date(value*1000);
    //   return formatDate(dt, 'yyyy-MM-dd')
    // }
  }
};
</script>

<style scoped lang="less">
.detail-comment {
  padding: 10px;
  .comment-nav {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    span {
    }
  }
  header {
    display: flex;
    align-items: center;
    margin-top: 10px;
    img {
      border-radius: 50%;
      width: 50px;
      margin-right: 15px;
    }
  }
  main {
    margin: 10px 0;
    color: #666;
    font-size: 14px;
  }
  footer {
    font-size: 12px;
    color: #666;
    span {
      margin-right: 10px;
    }
  }
}
</style>
