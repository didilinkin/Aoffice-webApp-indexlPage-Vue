<template>
    <div id="content">
        <Title :title=titleArr[0].title /><!-- 父向子传 -->
        <BuildingList />
        <Title :title=titleArr[1].title /><!-- 父向子传 -->
        <AboutUs />
    </div>
</template>

<script>
import BuildingList     from './BuildingList.vue'
import Title            from './Title.vue'
import AboutUs          from './AboutUs.vue'
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
@import '../../sass/mixin.sass'
#content
    +REM(padding-left,16px)
    +REM(padding-right,16px)
    +REM(padding-bottom,16px)
    +bC(#FAFAFA)
    .string
        +string(#8f99af)
</style>