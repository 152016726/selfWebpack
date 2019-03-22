import '../staticSource/css.css';
import '../staticSource/scss.scss';
import '../staticSource/less.less';
import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import home from './components/home.vue';

Vue.use(vueRouter);
let router =new vueRouter({
    routes:[
        {name: 'default', path: '/', redirect: '/home'},
        {name: 'home', path: '/home', component: home}
    ]
});

new Vue({
    el: '#app',
    router,
    render:create=>create(App)
});