<template>
  <div>
    商品名称
    <MyTable></MyTable>
    <AddsTag></AddsTag>
  </div>
</template>

<script>
import MyTable from '#/MyTable'
import AddsTag from '#/AddsTag'
export default {
  name: 'MyGoodsSearch',
  components: {
    MyTable,
    AddsTag
  }
}
</script>

<style></style>
