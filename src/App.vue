<template>
  <div class="app">
    <MyHeader title="MyTabBar案例"></MyHeader>
    <!-- 通过is属性绑定动态(页面)组件 -->
    <component :is="componentName"></component>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
// 1.创建组件
// 2.引入组件
// 2.注册组件
import MyHeader from '#/MyHeader'
import MyFooter from '#/MyFooter'
import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'
export default {
  data() {
    return {
      // 默认商品名称高亮
      componentName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList'
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch'
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo'
        }
      ]
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo
  }
}
</script>

<style lang="less" scoped>
body {
  .app {
    margin: 50px 0;
  }
}
</style>
