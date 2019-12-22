<template>
  <div class="cart-item">
    <check-button :is-checked="cartItem.check" @checkClick="checkBtnClick"></check-button>
    <div class="item">
      <div class="item-img">
        <img :src="cartItem.img" alt="" />
      </div>
      <div class="item-info">
        <p>{{ cartItem.desc }}</p>
        <p class="item-desc">{{ cartItem.desc }}</p>
        <div class="info-bottom">
          <span class="item-price">{{ cartItem.price }}</span>
          <span>x{{ cartItem.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbtn/CheckButton'
import {mapMutations} from 'vuex'
export default {
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
      checkBtnClick() {
        //   console.log('bb')
        this.cartItem.check = !this.cartItem.check
      },
      ...mapMutations(['add2Cart'])
  },
  components: {
      CheckButton
  }
};
</script>

<style scoped lang="less">
.cart-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  .check {
    width: 20px;
  }
  .item {
    display: flex;
    justify-content: center;
    .item-img {
      padding: 0 5px;
      img {
        width: 80px;
        height: 100px;
        display: block;
        border-radius: 5px;
      }
    }
    .item-info {
        padding: 0 5px;
      p {
        width: 240px;/*先写死宽度*/ 
        font-size: 17px;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .item-desc {
        font-size: 14px;
        color: #666;
      }
      div {
        display: flex;
        justify-content: space-between;
        .item-price {
          color: orangered;
        }
      }
    }
  }
}
</style>
