<template>
  <div class="good-list" name="show">
    <ul class="goodList">
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
  props: [
    'goodId'
  ],
  data() {
    var _this = this
    this.$http.get("json/bjb.json").then( (res) => {
      _this.list = res.data;
    })
    return {
      list: []
    }
  },
  watch: {
    goodId () {
      var _this = this
      var url = "";
      if(_this.goodId == 0) {
        url = "json/bjb.json";
      } else if (_this.goodId == 1) {
        url = "json/shouji.json";
      }
      this.$http.get(url).then( (res) => {
        _this.list = res.data
      })
      return {
        list:[]
      } 
    }
  }
}
</script>

<style scope>
  .goodList li {
    width: 300px;
    height: 250px;
    list-style: none;
    float: left;
    font-size: 9px;
    color: red;
    margin-bottom: 30px;
  }
  img {
    height: 180px;
    width: 250px;
  }
</style>