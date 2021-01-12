<template>
  <tabBar>
    <tabBarItem path="/Home">
      <template v-slot:item-icon><i class="icon-home3"></i></template>
      <template v-slot:item-icon-active><i class="icon-home3"></i></template>
      <template v-slot:item-text><div>首页</div></template>
    </tabBarItem>
    <tabBarItem path="/Category">
      <template v-slot:item-icon><i class="icon-library"></i></template>
      <template v-slot:item-icon-active><i class="icon-library"></i></template>
      <template v-slot:item-text><div>分类</div></template>
    </tabBarItem>
    <tabBarItem path="/Show">
      <template v-slot:item-icon><i class="icon-cart"></i></template>
      <template v-slot:item-icon-active><i class="icon-cart"></i></template>
      <template v-slot:item-text><div>购物车</div></template>
    </tabBarItem>
    <tabBarItem path="/Mine">
      <template v-slot:item-icon><i class="icon-user"></i></template>
      <template v-slot:item-icon-active><i class="icon-user"></i></template>
      <template v-slot:item-text><div>我的</div></template>
    </tabBarItem>
  </tabBar>
</template>

<script>
  import tabBar from 'components/common/tabBar/TabBar'
  import tabBarItem from 'components/common/tabBar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      tabBar,
      tabBarItem
    }
  }
</script>

<style scoped>

</style>
