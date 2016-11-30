import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import appIndex   from './../App.vue'

export default (router)=>router.map({
    '/':{
        name:'index',   //应用首页
        component:require('./views/index') //加载index页面
    },
    '*':{//除'/'以外的所有路由，均跳转到404页面
        name:'404',
        component:require('./views/404')// 加载404页面
    }
})

// const routes = [
//     // 动态路径参数 以冒号开头
//   { path: '/user/:id', component: User }
// ]

// const router = new VueRouter({
//     routes: [
//         // {
//         // 	path: '/user/:id',
//         // 	component: User ,
//         // 	children :[
//         // 		{
//         //        // 当 /user/:id/profile 匹配成功，
//         //        // UserProfile 会被渲染在 User 的 <router-view> 中
//         //        path: 'profile',
//         //        component: UserProfile
//         //      },
//         //      {
//         //        // 当 /user/:id/posts 匹配成功
//         //        // UserPosts 会被渲染在 User 的 <router-view> 中
//         //        path: 'posts',
//         //        component: UserPosts
//         //      },
//         // 		{ path: '', component: UserHome }
//         // 	]
//         // }

//         {
//         path: '/',
//         components: {
//             default: appIndex,
//             footerMenu : footMenu
//         }
//         },
//     ]
// })

// export default {
//   router
// }