<template>
  <div class="left-nav">
    <div class="title">热门推荐</div>
    <ul>
      <li v-for="(item, index) in menu" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  data() {
    return {
      menu: [
        '笔记本电脑',
        '手机',
        '笔记本电脑',
        '手机',
        '笔记本电脑',
        '手机',
        '笔记本电脑',
        '手机',
        '笔记本电脑',
        '手机',
        '笔记本电脑',
        '手机',
        '笔记本电脑',
        '手机'
      ]
    }
  },
}
</script>