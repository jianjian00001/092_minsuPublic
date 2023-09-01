import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import minsuxinxi from '@/views/modules/minsuxinxi/list'
    import fangjianxinxi from '@/views/modules/fangjianxinxi/list'
    import fangjianyuding from '@/views/modules/fangjianyuding/list'
    import fangjiantuiding from '@/views/modules/fangjiantuiding/list'
    import storeup from '@/views/modules/storeup/list'
    import fangjianleixing from '@/views/modules/fangjianleixing/list'
    import shangjia from '@/views/modules/shangjia/list'
    import tousufankui from '@/views/modules/tousufankui/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import discussfangjianxinxi from '@/views/modules/discussfangjianxinxi/list'
    import discussminsuxinxi from '@/views/modules/discussminsuxinxi/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/minsuxinxi',
        name: '民宿信息',
        component: minsuxinxi
      }
          ,{
	path: '/fangjianxinxi',
        name: '房间信息',
        component: fangjianxinxi
      }
          ,{
	path: '/fangjianyuding',
        name: '房间预订',
        component: fangjianyuding
      }
          ,{
	path: '/fangjiantuiding',
        name: '房间退订',
        component: fangjiantuiding
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/fangjianleixing',
        name: '房间类型',
        component: fangjianleixing
      }
          ,{
	path: '/shangjia',
        name: '商家',
        component: shangjia
      }
          ,{
	path: '/tousufankui',
        name: '投诉反馈',
        component: tousufankui
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/chat',
        name: '在线客服',
        component: chat
      }
          ,{
	path: '/discussfangjianxinxi',
        name: '房间信息评论',
        component: discussfangjianxinxi
      }
          ,{
	path: '/discussminsuxinxi',
        name: '民宿信息评论',
        component: discussminsuxinxi
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
