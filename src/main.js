import Vue from 'vue'
import store from './store'
import router from './router/config.js'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(
    MuseUI
)

new Vue({
    el: '#app',
    store,
    router: router.router
}).$mount('#app')

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    document.body.style.fontFamily="PingFang SC Regular";
} else if (/(Android)/i.test(navigator.userAgent)) {
    document.body.style.fontFamily="NoteSansCJKsc-Regular";
} else {
    document.body.style.fontFamily="Microsoft Yahei";
};

function menuBtn() {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        tianbai.getCall();
    } else if (/(Android)/i.test(navigator.userAgent)) {
        AndroidFunction.showBack();
    } else {
        alert('Windows');
    };
}
function dialogBtn(){
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        tianbai.call();
    } else if (/(Android)/i.test(navigator.userAgent)) {
        AndroidFunction.showChat();
    } else {
        alert('Windows');
    };
}
