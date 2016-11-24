import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

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
