<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/mainTabBar/MainTabBar'
export default {
  name: 'app',
  components: {
    mainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/img/tabBar/style.css";

</style>
