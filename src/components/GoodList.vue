<template>
  <div class="good-list" name="show">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img v-bind:src="item.img">
        <p>{{ item.goodName }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodList',
  data() {
    var _this = this
    this.$http.get("json/bjb.json").then( (res) => {
      _this.list = res.data;
    })
    return {
      list: []
    }
  },
}
</script>

<style scope>
  img {
    height: 250px;
    width: 300px;
  }
</style>