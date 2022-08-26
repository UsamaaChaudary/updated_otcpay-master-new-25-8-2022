import router from '../router'
import NProgress from 'nprogress'
import {
  Message
} from 'element-ui'
import store from '../store'
import 'nprogress/nprogress.css'
import i18n from "../i18n"
import {
  getToken
} from '@/utils/auth'
import _ from "lodash"
const _Message = Message


// 路由发生变化修改页面 title 
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = i18n.t(to.meta.title)
  } else {
    document.title = i18n.t("appname");
  }
  // next()
  store.dispatch("app/getCurrency")
  if (getToken()) {
    /* has token*/
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      if (store.getters.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(() => {
          store.dispatch("getBanks")
          next()
        }).catch(err => {
          store.dispatch('LogOut').then(() => {
            _Message.error({
              message: err
            })
            next({
              path: '/'
            })
          })
        })
      } else {
        next()
      }
    }
  } else {
    // 没有token
    const needLogin = _.find(to.matched, item => item.meta.needLogin)
    if (needLogin) {
      // 该路由需要登录
      next(`/login?redirect=${to.fullPath}`)
      NProgress.done()
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})