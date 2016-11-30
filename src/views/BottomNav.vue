<template>
  <mu-paper>
    <!-- 浅色导航栏 不适用shift效果 -->
    <mu-bottom-nav :value="bottomNav"  @change="handleChange" style="height: 1.7rem; color: #FFF;">
      <mu-bottom-nav-item value="discover" title="发现" icon="location_searching" href="#/discover" class="router-link-active"/>

      <mu-bottom-nav-item value="building" title="房源" icon="location_city" href="#/houseResource" class="router-link-active"/>
      
      <mu-bottom-nav-item value="map" title="地图" icon="map" href="#/map" class="router-link-active"/>

      <mu-bottom-nav-item value="serve" title="服务" icon="headset_mic" href="#/service" class="router-link-active"/>

      <mu-bottom-nav-item value="user" title="我的" icon="person" href="#/user" class="router-link-active"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'movies',
      bottomNavColor: 'movies'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'

.mu-bottom-nav
  /*+REM(height,48px)*/
  +colorF
  a
    text-decoration: none
</style>