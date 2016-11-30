import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app              from '../App.vue'                       // 根组件
import bottomNav        from '../views/BottomNav.vue'           // 底部导航
import discover         from '../views/Discover.vue'            // "发现" 页面
import houseResource    from '../views/HouseResource.vue'       // "房源" 页面

const test = {
  template: `<div>test</div>`
}

const router = new VueRouter({
    routes: [
        {
            path: 'app',
            components: {
                default: app
            }
        },
        {
            path: '/',
            name:'app',
            components: {
                default: app
            },
            children: [
                {
                    path: '/',
                    components: {
                        AppContent      : discover,
                        AppBottomNav    : bottomNav,
                        test
                    }
                },
                {
                    path: 'discover',
                    components: {
                        AppContent      : discover,
                        AppBottomNav    : bottomNav
                    }
                },
                {
                    path: 'houseResource',
                    components: {
                        AppContent      : houseResource,
                        AppBottomNav    : bottomNav
                    }
                }
            ]
        }
    ]
})

export default {
  router
}