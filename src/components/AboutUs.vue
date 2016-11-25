<template>
    <div id="aboutUs">
        <div class="textBox aplusoffice">
            <h3><b>A+office</b></h3>
            <div class="string"></div>
            <p>
                青岛上朝信息科技有限公司于2016年开发了A+Office，
                一个专注于为各类企业提供中高端办公室租赁及配套服务的互联网平台。
            </p>
            <p>
                A+OFFICE以提升企业租赁体验为目标，抵制虚假信息。
                通过线上初步选房-线下核定房源-陪同看房-撮合交易
                这一流程，为客户提供最有效的租房服务。同时，A+OFFICE还
                为客户准备了办公装修，家具采买等其他专业的配套服务，
                为所有客户提供一站式优质服务。
            </p>
        </div>
        <div class="textBox contact">
            <h3><b>联系方式</b></h3>
            <div class="string"></div>
            <!-- 列表循环 -->
            <div v-for="item in contactArr">
                <span><b>{{ item.attr }}</b></span>
                <p>{{ item.value }}</p>
            </div>
            <img :src="addressImg">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            contactArr: [
                {
                    attr: '电话：',
                    value: '0532-83861532'
                },
                {
                    attr: '邮件：',
                    value: 'aplusoffice@forevercj.com'
                },
                {
                    attr: '地址：',
                    value: '山东省青岛市市南区华润大厦B座2408号'
                }
            ],
            addressImg: './dist/group_2.png'
        }
    }
}
</script>

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'
/* 文字盒子 样式(通用) */
.textBox
    +REM(padding-right,16px)
    +REM(padding-bottom,23.5px)
    +REM(padding-left,16px)
    +REM(padding-top,16px)
    +REM(margin-bottom,10px)
    +bC(#FFF)
    border: 
        width: 1px 
        style: solid 
        color: rgba(143,153,175,.1)
    +REM(border-radius,.5px)
    box-shadow: .9px .8px 2px rgba(143,153,175,.1)
    h3
        @extend %title-font
    >.string
        +REM(margin-top,11px)
        +REM(margin-bottom,11px)
    p
        @extend %dib
        @extend %text-font
    &:last-child
        margin-bottom: 0

/* A+office样式(单独适用) */
.aplusoffice p
    +REM(margin-bottom,18px)
    @extend %justify
    /* 最后一个margin-bottom: 0 */
    &:last-child
        +mB(0)
/* 联系方式(单独适用) */
.contact span
    @extend %dib
    @extend %text-font
    +REM(line-height,23px)
.contact>img
    /* 移动端图片样式混合 */
    +REM(padding-top,10px)
    +REM(padding-bottom,10px)
    +mobileImg(100px)
</style>