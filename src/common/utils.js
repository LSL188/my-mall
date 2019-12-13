// 防抖函数:让30张图片一次发送
export function debounce(func, delay) {
  let timer = null
  return function(...args) {
    if (timer) window.clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}