<template>
    <div class="goods-list">
      <goodsListItem></goodsListItem>
    </div>
</template>

<script>
  import goodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      goodsListItem
    },
  }
</script>

<style scoped>

</style>
