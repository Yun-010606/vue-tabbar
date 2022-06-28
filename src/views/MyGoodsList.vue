<template>
  <div>
    <MyTable :goodsList="goodsList">
      <template v-slot:header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{ item }">
        <td>{{ item.id }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>
          <AddsTag @add-tag="addTag(item.tags, $event)"></AddsTag>
          <!-- 徽章 -->
          <span
          class="badge bg-warning text-dark"
          v-for="(i, index) in item.tags" :key="index"
          style="margin-right: 6px">
          {{ i }}
          </span>
          </td>
        <td><button class="btn btn-danger btn-sm"
        @click="delGoods(item.id)"
        >删除</button></td>
      </template>
    </MyTable>
    </div>
</template>

<script>
import MyTable from '#/MyTable'
import AddsTag from '#/AddsTag'
import axios from '@/utils/request.js'
export default {
  name: 'MyGoodsList',
  components: {
    MyTable,
    AddsTag
  },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const res = await axios({
        url: '/api/goods'
      })
      // console.log(res)
      this.goodsList = res.data.data
    },
    delGoods (id) {
      this.goodsList = this.goodsList.filter((item) => {
        if (item.id !== id) {
          return true
        } else {
          return false
        }
      })
    },
    addTag (tags, tagName) {
      tags.push(tagName)
    }
  }
}
</script>

<style></style>
