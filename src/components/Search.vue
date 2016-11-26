<template>
    <div id="search">
        <form class="search__form">
            <input class="searchInput" placeholder="输入大厦名称或地点"/>
            <div @click="alert" class="searchBtn">
                <img class="searchBtn_Img" :src="searchBtn_Img">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            searchBtn_Img: require('../assets/icon_home_search.png')
        }
    },
    mounted: function () {
        // this.alert()
    },
    methods: {
        alert: function () {
            alert('开始搜索')
        }
    }
}
</script>

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'
#search
    +REM(margin-top,128px)
    form.search__form
        display: flex
        align-items: center
        justify-content: center
        text-align: center
        /* 搜索框 */
        .searchInput
            @extend %dib
            float:left
            zoom: 1
            +REM(padding-top,19.5px)
            +REM(padding-bottom,19.5px)
            +REM(padding-left,12px)
            +REM(padding-right,12px)
            +REM(width,225px-24px)
            +REM(height,10px)
            border: none
            border-radius: 0
            +opacity(.44)
            outline-color: rgba(255,255,255,.2)
        /* 搜索按钮 */
        .searchBtn
            @extend %flexCenter
            float:left
            +REM(width,60px)
            +REM(height,49px-10px)
            +bC(rgba(255,39,37,.6))
</style>