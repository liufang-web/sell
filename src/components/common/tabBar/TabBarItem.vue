<template>
  <div id="tab-bar-item" @click="itemClick">
    <div class="icon" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="icon" :style="activeStyle" v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "tabBarItem",
      data() {
         return {
           // isActive: false
         }
      },
      props: {
        path: String,
        activeColor: {
          type: String,
          default: '#dd0000'
        }
      },
      computed: {
        isActive() {
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods: {
        itemClick() {
          this.$router.push(this.path)
        }
      }
    }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .icon{
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
