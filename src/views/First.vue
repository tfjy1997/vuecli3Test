<template>
  <div class="main">
    <div class="left">
      <left-nav></left-nav>
    </div>
    <div class="right">
      <div class="top">
        <img src="img/title.jpg" alt="">
      </div>
      <div class="buttom">
        <right-menu></right-menu>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from '../components/LeftNav'
import RightMenu from '../components/RightMenu'

export default {
  name: 'Main',
  components: {
    LeftNav,
    RightMenu
  }
}
</script>

<style type="text/css">
  * {
    padding: 0;
    margin: 0;
  }

  .main {
    width:1400px;
    margin: 20px auto;
  }

  .left {
    width: 150px;
    float: left;
    margin-right: 10px;
  }

  .right {
    width: 1200px;
    float: left;
    margin-left: 10px;
  }

  .main .right .top img {
    height: 200px;
    width: 1200px;
  }

  .left,.right {
    background: #f5f5f5;
  }
</style>