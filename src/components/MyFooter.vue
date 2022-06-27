<template>
  <div class="my-tab-bar">
    <div class="tab-item" v-for="(item, index) in tabList"
    :key="index"
    :class="{current: currentIndex === index}"
    @click="changeCurrent(item.componentName, index)"
    >
      <!-- 图标 -->
      <span :class="`iconfont ${item.iconText}`"></span>
      <!-- 文字 -->
      <span style="margin-top:-10px">{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  // 渲染底部样式
  props: {
    tabList: {
      type: Array,
      required: true,
      // 自定义校验器 validator是一个函数
      validator (data) {
        const len = data.length
        if (len > 2 && len < 5) {
          return true
        } else {
          // throw new Error 创建一个错误 并抛出错误
          throw new Error('tablist数组长度必须在2-5之内')
        }
      }
    }
  },
  data () {
    return {
      // 记录点击哪一个高亮
      currentIndex: 0
    }
  },
  methods: {
    changeCurrent (currName, index) {
      // 实现高良
      this.currentIndex = index
      // 通知父组件切换组件
      this.$emit('change-current', currName)
    }
  }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
  .iconfont {
    color: #1d7bff;
  }
}
</style>
