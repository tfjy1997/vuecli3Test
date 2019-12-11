<template>
  <div class="right-menu">
    =={{ kk }}==
  </div>
</template>

<script>
import Msg from './msg.js'
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
  }
}
</script>