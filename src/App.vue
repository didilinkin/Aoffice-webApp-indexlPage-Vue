<template>
    <div id="app">
        <Header />
        <Content />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'   // 引入Vuex‘获取方法 与 行为方法’
import  Header      from    './components/Header.vue'
import  Content     from    './components/Content.vue'
const   components = { Header,Content }

export default {
    components: components,
    mounted: function () {
        this.addState()
    },
    methods: mapActions([ 'addState' ])
}
</script>
