<template>
    <div id="title">
        <div class="string"></div>
        <h2> {{ title }} </h2>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="sass?indentedSyntax">
@import '../sass/mixin.sass'
#title
    position: relative
    @extend %flexCenter
    +REM(height,50px)
    text-align: center
    .string
        display: block
        position: absolute
        left: 0
        top: 46%
        z-index: 1
        width: 100%
        +REM(height,1px)
        border-top: 1px solid #8f99af
        +REM(border-bottom-width,1px)
    h2
        /*position: absolute*/
        @extend %dib
        +REM(padding-left,28px)
        +REM(padding-right,28px)
        +REM(padding-bottom,4px)
        color: $title-color
        +bC(#FAFAFA)
        +REM(font-size,14px)
        +REM(line-height,23px)
        white-space: nowrap
        z-index: 2
</style>