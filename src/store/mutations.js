export default {
  addCounter(state, payload) {
    payload.count++;
  },
  add2Cart(state, payload) {
    payload.check = true
    state.cartList.push(payload);
  }
};
