<template>
    <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" :key="index"
           :class="{active: index === currentIndex}"
           @click="itemClick(index)"
      >
        <span class="tab-control-text">{{item}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active{
    color: var(--color-hign-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-tint);
  }
  .tab-control-text{
    padding: 3px;
  }

</style>
