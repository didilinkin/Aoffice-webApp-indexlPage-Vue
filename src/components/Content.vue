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

</style>