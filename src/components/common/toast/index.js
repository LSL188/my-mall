import Toast from './Toast'
const obj = {};
obj.install = function(Vue) {
    // console.log('执行了obj的install方法')
    const toastConstructor = Vue.extend(Toast)
    const toast = new toastConstructor()
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj;
