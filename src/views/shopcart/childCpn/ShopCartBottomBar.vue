<template>
  <div class="shop-cart-bottom-bar">
    <div class="check-box">
      <check-button :is-checked="isSelectAll" @click.native="changeSelect"></check-button>
      <span>全选</span>
    </div>
    <div class="count">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="calc" @click="calcClick">
      去计算({{calcCheck}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbtn/CheckButton";
import {mapGetters} from 'vuex'
export default {
  components: {
    CheckButton
  },
  computed: {
      ...mapGetters(['cartListGetters']),
      totalPrice() {
        //  return console.log(this.cartListGetters)
        const cartlist = this.cartListGetters
        // console.log(cartlist)
         return cartlist.filter(item => {
             return item.check
         }).reduce((value, item) => {
             return value + item.lowNowPrice*item.count
         }, 0).toFixed(2)
      },
      calcCheck() {
          return this.cartListGetters.filter(item => item.check).length
      }, 
      isSelectAll() {
          if (this.cartListGetters.length === 0) return false
          for (let item of this.cartListGetters) {
              if (!item.check) {
                  return false
              }
          }
          return true
      }
  },
  methods: {
      changeSelect() {
        //   console.log('aa')
        if (this.isSelectAll) { //全部选中
            this.cartListGetters.forEach(item => item.check = false)
        } else { //部分选中或者都没选中
            this.cartListGetters.forEach(item => item.check = true)
        }
      },
      calcClick() {
          if (!this.isSelectAll) {
              this.$toast.show('请选择购买的商品', 1000)
          }
      }
  }
};
</script>

<style scoped lang="less">
.shop-cart-bottom-bar {
  height: 40px;
  position: relative;
  padding: 0 0 0 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.25);
  background-color: #ddd;
  .check-box {
    width: 100px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
  .count {
      flex: 1;
  }
  .calc {
      width: 100px;
      background-color: @navColor;
      text-align: center;
      line-height: 40px;
      color: #fff;
  }
}
</style>
