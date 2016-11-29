<template>
    <div id="app">
        <Header />
        <Content />
        <BottomNav />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'   // 引入Vuex‘获取方法 与 行为方法’
import  Header      from    './components/Header.vue'
import  Content     from    './components/Content.vue'
// 底部导航栏-MuseUI
import BottomNav        from './components/BottomNav.vue'
const   components = { Header,Content,BottomNav }

export default {
    components: components,
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
