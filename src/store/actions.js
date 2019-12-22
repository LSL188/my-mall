export default {
  addCartAction(context, payload) {
    return new Promise((resolve) => {
      // 1.查看之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );
      // 2.判断商品:商品数量+1,还是添加新商品
      if (oldProduct) {
        context.commit("addCounter", oldProduct);
        resolve('当前商品数量+1')
      } else {
        payload.count = 1;
        context.commit("add2Cart", payload);
        resolve('添加了新商品')
      }
    })
  }
};
