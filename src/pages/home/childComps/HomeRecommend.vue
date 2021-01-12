<template>
    <div id="recommend">
      <div class="recommend-item" v-for="(item,index) in recommends" v-bind:key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        defaults() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 10px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 5px;
  }
</style>
