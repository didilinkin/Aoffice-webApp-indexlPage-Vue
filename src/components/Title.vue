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
    +REM(height,50px)
    @extend %flexCenter
    text-align: center
    .string
        +string(#8f99af)
    h2
        position: absolute
        @extend %dib
        +REM(padding-left,28px)
        +REM(padding-right,28px)
        +REM(padding-bottom,4px)
        color: $title-color
        +bC(#FAFAFA)
        +REM(font-size,14px)
        +REM(line-height,23px)
</style>