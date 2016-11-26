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

#app
    position: relative
    padding-bottom: 1.5rem

// 抵消UI组件默认样式
.mu-paper-1
    position: fixed !important
    bottom: 0px !important
    width: 100% !important
    z-index: 9999
/* 图标 大小/颜色 */
.mu-icon
    +uiIcon(.6rem)
    width: .6rem !important
    height: .6rem !important
    color: $text-color !important
    margin:
        left: .2rem
        right: .2rem
/* 按下时: 图标-颜色 */
.mu-bottom-item-active .mu-bottom-item-icon
    color: rgba(255,39,37,.7) !important

/* 图标下文字 */
.mu-bottom-item-text
    +uiIcon(.39rem)
    color: $text-color !important
/* 按下时: 图标下文字-颜色 */
.mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text
    /*color: $text-color*/
    color: rgba(255,39,37,.7) !important
/* 替换背景色 */
/*.mu-bottom-nav-shift -取消shift效果*/
.mu-bottom-nav
    background-color: #FFF !important
    box-shadow: 0 -.01rem .4rem rgba(143,153,175,.35) !important
</style>
