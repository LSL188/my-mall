<template>
    <div class="tab-bar">
      <slot></slot>
    </div>
</template>

<style scoped lang="less">
.tab-bar {
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.15);
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
