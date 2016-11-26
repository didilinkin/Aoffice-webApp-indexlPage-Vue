<template>
  <mu-paper>
    <!-- 浅色导航栏 不适用shift效果 -->
    <mu-bottom-nav :value="bottomNav"  @change="handleChange" style="height: 1.7rem; color: #FFF;">
      <mu-bottom-nav-item value="discover" title="发现" icon="location_searching"/>
      <mu-bottom-nav-item value="building" title="房源" icon="location_city"/>
      <mu-bottom-nav-item value="map" title="地图" icon="map"/>
      <mu-bottom-nav-item value="serve" title="服务" icon="headset_mic"/>
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
</style>