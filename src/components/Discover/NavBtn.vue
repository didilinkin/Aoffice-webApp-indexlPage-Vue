<template>
    <div id="nav">
        <span class="menu" onClick="javascript:menuBtn()"> 
            <img :src="menuImg"> 
        </span>
        <span class="dialog" onClick="javascript:dialogBtn()"> 
            <img :src="dialogImg"> 
        </span>
    </div>
</template>

<script>
export default { 
    data () {
        return {
            menuImg: require('../../assets/nav_icon_menu.png'),
            dialogImg: require('../../assets/nav_icon_dialog.png')
        }
    }
 }
</script>

<style lang="sass?indentedSyntax">
@import '../../sass/mixin.sass'
%spanImg
    position: absolute
    +REM(width,25px)
    +REM(height,25px)
    img
        /*+REM(width,19.5px)*/
        +w-h(100%,100%)
#nav
    position: relative
    extend %flexCenter
    +REM(margin-top,20px)
    +REM(height,25px)
    span.menu
        @extend %spanImg
        left: 0
    span.dialog
        @extend %spanImg
        right: 0
</style>
