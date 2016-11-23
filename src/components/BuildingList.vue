<template>
    <div id="buildingList">
        <h3 class="buildingList__title"> 热门办公室推荐 </h3>
        <ul>
            <li v-for="item in BuildingList_Arr[0]">
                <img :src="item.buildingList_imgUrl">
                <div class="buildingList__info">
                    <h2>{{ item.buildingList_title }}</h2>
                    <h3>{{ item.buildingList_describe }}</h3>
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
    /* 楼盘列表-大标题 */
    .buildingList__title
    ul li
        /* 楼盘列表-楼盘图片 */
        img
        /* 楼盘列表-楼盘信息 */
        .buildingList__info
            /* 暂时无法循环背景图片 */
            background-image: url(../assets/map_home_recommended_1.png)
            h2
            h3
</style>