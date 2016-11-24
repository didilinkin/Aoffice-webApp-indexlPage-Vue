<template>
    <div id="content">
        <Title :title=titleArr[0].title /><!-- 父组件向子组件传递数据 -->
        <BuildingList />
        <Title :title=titleArr[1].title /><!-- 父组件向子组件传递数据 -->
        <div class="textBox aplusoffice">
            <h3> A+office </h3>
            <div class="string"></div>
        </div>
        <div class="textBox contact">
            <h3> 联系方式 </h3>
            <div class="string"></div>
        </div>
    </div>
</template>

<script>
import BuildingList     from './BuildingList.vue'
import Title            from './Title.vue'
const components = { BuildingList,Title }

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

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'
#content
    +REM(padding-left,16px)
    +REM(padding-right,16px)
    width: ((375px-(16px)*2))/37.5px*1rem
    +bC(#FAFAFA)
    .string
        +string(#8f99af)
</style>