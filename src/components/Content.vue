<template>
    <div id="content">
        <Title :title=titleArr[0].title /><!-- 父组件向子组件传递数据 -->
        <BuildingList />
        <Title :title=titleArr[1].title /><!-- 父组件向子组件传递数据 -->
        <AboutUs />
        <!--<BottomNav />-->
    </div>
</template>

<script>
import BuildingList     from './BuildingList.vue'
import Title            from './Title.vue'
import AboutUs          from './AboutUs.vue'
// 测试添加底部导航栏-MusUI
// import BottomNav        from './BottomNav.vue'
// ,BottomNav
const components = { BuildingList,Title,AboutUs }

export default {
    data() {
        return{
            titleArr: [
                { title: '热门办公室推荐' },
                { title: '关于我们' }
            ]
        }
    },
    components: components
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'
#content
    +REM(padding-left,16px)
    +REM(padding-right,16px)
    +REM(padding-bottom,16px)
    width: ((375px-(16px)*2))/37.5px*1rem
    +bC(#FAFAFA)
    .string
        +string(#8f99af)
</style>