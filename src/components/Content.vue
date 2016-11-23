<template>
    <div id="content">
        <BuildingList />
    </div>
</template>

<script>
import BuildingList from './BuildingList.vue'
const components = { BuildingList }

export default {
    components: components,
    mounted: function () { },
    methods: { }
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