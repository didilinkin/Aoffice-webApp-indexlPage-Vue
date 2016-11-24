<template>
    <div id="content">
        <TitleStyle title="热门办公室推荐" />
        <BuildingList />
        <TitleStyle title="关于我们" />
    </div>
</template>

<script>
import BuildingList from './BuildingList.vue'
import TitleStyle   from './TitleStyle.vue'
const components = { BuildingList,TitleStyle }

export default {
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
</style>