<template>
    <div id="titleStyle">
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
#titleStyle
    +REM(height,50px)
    @extend %flexCenter
    text-align: center
    .string
        display: block
        width: 100%
        +REM(height,1px)
        border-top: 1px solid $title-color
        +REM(border-bottom-width,1px)
    h2
        position: absolute
        @extend %dib
        +REM(padding-left,28px)
        +REM(padding-right,28px)
        +REM(padding-bottom,5px)
        color: $title-color
        +bC(#FAFAFA)
        +REM(font-size,14px)
        +REM(line-height,23px)
</style>