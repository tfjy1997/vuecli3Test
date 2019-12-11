<template>
  <div class="left-nav">
    <div class="title">热门推荐</div>
    <ul class="menu">
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
        '服装',
        '手表',
        '书籍',
        '玩具',
        '小家电',
        '学习用品',
        '办公用品',
        '旅游必备',
        '游戏卡通'
      ]
    }
  },
}
</script>

<style type="text/css">
  .title {
    width: 100px;
    color: red;
    margin: 2px auto;
    height: 50px;
    line-height: 50px;
  }

  .menu li{
    /* 去点 */
    list-style: none;
    height: 50px;
    margin-bottom: 2px;
    background-color: white;
    line-height: 50px;
  }
</style>