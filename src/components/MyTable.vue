<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
       <slot name="header"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in goodsList" :key="item.id">
       <slot name="body" :item="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
// 1. MyTable组件里, 标题和body不写死, 两个具名插槽
// 2. template模板进行传递
export default {
  name: 'MyTable',
  props: {
    goodsList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
