<template>
    <div id="buildingList">
        <ul>
            <li v-for="item in BuildingList_Arr[0]">
                <img :src="item.buildingList_imgUrl">
                <!--v-bind:style="{ backgroundImage: url() }"-->
                <div  class="buildingList__info">
                    <div class="buildingList__info--left">
                        <h2>{{ item.buildingList_title }}</h2>
                        <h3>{{ item.buildingList_describe }}</h3>
                    </div>
                    <div class="buildingList__info--right">
                        <img src="../assets/icon_nav.png">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: mapGetters({ BuildingList_Arr: 'BuildingList_Arr' })
}
</script>

<style lang="sass?indentedSyntax" scoped>
@import '../sass/mixin.sass'
#buildingList
    ul li
        +REM(margin-top,15px)
        +boxShadow(.9px,.8px,2px,rgba(143,153,175,.1))
        /* 楼盘列表-楼盘图片 */
        >img
            @extend %dib
            width: 100%
            +REM(height,135px)
            object-fit: cover
        /* 楼盘列表-楼盘信息 */
        .buildingList__info
            +REM(padding-top,11.5px)
            +REM(padding-bottom,11.5px)
            +REM(margin-top,-4px)
            width: 100%
            /* 暂时无法循环背景图片 */
            background:
                image: url(../assets/map_home_recommended_1.png)
                size: 100% 100%
            .buildingList__info--left
                @extend %dib
                width: 85%
                h2
                    +REM(margin-left,10.5px)
                    @extend %text-font
                    +REM(line-height,21px)
                h3
                    +REM(margin-left,10.5px)
                    +REM(margin-bottom,4px)
                    color: $text-color
                    +REM(font-size,12px)
                /* 背景图上坐标图片 */
                >img
                    font-size: 0
                    display: block
            .buildingList__info--right
                @extend %dib
                width: 13%
        &:first-child
            margin-top: 0
        &:last-child
            +REM(margin-bottom,15px)
</style>