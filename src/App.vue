<template>
    <div id="app">
        <!-- 路由组件 -->
        <router-view name="AppContent">      </router-view>
        <router-view name="AppBottomNav">    </router-view>
        <h1>测试</h1>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'   // 引入Vuex‘获取方法 与 行为方法’

export default {
    mounted: function () {
        this.addState()
    },
    methods: mapActions([ 'addState' ])
}
</script>

<style lang="sass?indentedSyntax">
@import './sass/mixin.sass'
@import './sass/MuseUI.sass' // 引入MuseUI样式

#app
    position: relative
    padding-bottom: 1.5rem
</style>
