<!-- "发现"页面 -->
<template>
    <div id="discover">
        <!-- "发现"头部 和 内容 -->
        <Header />
        <Content />
    </div>
</template>

<script>
import  Header      from    '../components/Header.vue'
import  Content     from    '../components/Content.vue'

const   components = { Header,Content }
export default { components: components }
</script>
