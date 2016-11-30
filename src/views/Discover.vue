<!-- "发现"页面 -->
<template>
    <div id="discover">
        <Header />
        <Content />
    </div>
</template>

<script>
import  Header      from    '../components/Discover/Header.vue'
import  Content     from    '../components/Discover/Content.vue'
const   components = { Header,Content }
export default { components: components }
</script>
