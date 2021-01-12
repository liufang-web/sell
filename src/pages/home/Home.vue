<template>
    <div id="home">
      <navBar class="home-nav"><template v-slot:center>购物街</template></navBar>
      <div class="banner"></div>
      <homeRecommend :recommends="recommends"></homeRecommend>
      <featureView></featureView>
      <tabControl class="tab-control" :titles="['流行','新款','精选']"></tabControl>
    </div>
</template>

<script>
  import navBar from 'components/common/navBar/NavBar'
  import homeRecommend from './childComps/HomeRecommend'
  import featureView from './childComps/FeatureView'

  import tabControl from 'components/content/tabControl/TabControl'

  import { getHomeMultidata,getHomeGoods } from "network/home";

  export default {
    name: "Home",
    components: {
      navBar,
      homeRecommend,
      featureView,
      tabControl,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0,list: []},
          'news': {page:0,list: []},
          'sell': {page:0,list: []},
        }
      }
    },
    created() {
      //获取轮播图，推荐数据
      this.getHomeMultidata()
      //获取goods数据
      this.getHomeGoods('pop')
      this.getHomeGoods('news')
      this.getHomeGoods('sell')
    },
    methods: {
      //获取轮播图，推荐数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          const data = res.data.data
          this.banners = data.banner.list
          this.recommends = data.recommend.list
          console.log(data.banner.list);
          console.log(data.recommend.list);
        })
      },
      //获取goods数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          console.log(res);
          const list = [...res.data.list]
          this.goods[type].list.push(list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    margin-bottom: 55px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .banner{
    width: 100%;
    height: 200px;
    background-color: #2D64B3;
  }
  .tab-control{
    /*吸顶效果,当没滚到到这个位置时是sticky,到此位置时是fixed*/
    position: sticky;
    top: 44px;
  }
</style>
