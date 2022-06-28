<template>
  <div>
    <button
      class="btn btn-primary btn-sm"
      v-if="isShowBtn"
      @click="isShowBtn = false"
    >
      +Tag
    </button>
    <input
      type="text"
      style="width: 70px"
      v-else
      v-focus
      @blur="addTag"
      v-model="tagName"
      @keydown.enter="addTag"
    />
  </div>
</template>

<script>
export default {
  name: 'AddsTag',
  data() {
    return {
      isShowBtn: true,
      tagName: ''
    }
  },
  directives: {
    focus: {
      // input 当插入dom的时候，才调用的
      inserted(el) {
        el.focus()
      }
    }
  },
  methods: {
    addTag() {
      // 添加tag
      this.isShowBtn = true
      if (this.tagName.trim() !== '') {
        this.$emit('add-tag', this.tagName)
      }
      this.tagName = ''
    }
  }
}
</script>

<style></style>
