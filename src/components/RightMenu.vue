<template>
  <div class="right-menu">
    <div v-if="kk==0">
      <good-list></good-list>
    </div>
     <div v-if="kk==1">
      2222222222222222222222
    </div>
    <div v-if="kk==2">
      3333333333333333333333
    </div>
    <div v-if="kk==3">
      4444444444444444444444
    </div>
  </div>
</template>

<script>
import Msg from './msg.js'
import GoodList from './GoodList'
export default {
  name: 'RightMenu',
  data() {
    return {
      kk: 0,
    }
  },
  mounted() {
    var _this = this // 一般下滑线表示副本
    Msg.$on('val', (m) => {
      // 回调函数，将‘val’值交给m处理
      _this.kk = m;
    })
  },
  components: {
    GoodList
  }
}
</script>