<template>
    <div id="header">
        <NavBtn />
        <Search />
    </div>
</template>

<script>
import  NavBtn  from    './NavBtn.vue'
import  Search  from    './Search.vue'
const components = { NavBtn,Search }
export default { components: components }
</script>

<style lang="sass?indentedSyntax">
@import '../../sass/mixin.sass'
#header
    position: relative
    +REM(padding-top,7.5px)
    +REM(padding-left,16px)
    +REM(padding-right,16px)
    +REM(height,285px)
    background:
        image: url(../../assets/homeBannerBg@2x.png)
        size: 100% auto
        repeat: no-repeat    
</style>