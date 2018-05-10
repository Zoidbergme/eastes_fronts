import Vue from 'vue'
import Vuex from 'vuex'

import allCustomer from './modules/allCustomer'
import beConfirmed from './modules/beConfirmed'
import invalid from './modules/invalid'
import dealed from './modules/dealed'
import effective from './modules/effective'
import CommissionManage from './modules/CommissionManage'
import dynamicList from './modules/dynamicList'
import CheckCompanyRule from './modules/CheckCompanyRule'
import generalLayout from './modules/generalLayout'
import autoLoaction from './modules/autoLoaction'
import CkPayCommissonDetail from './modules/CkPayCommissonDetail'
import AddApply from './modules/AddApply'
import CommissioCheck from './modules/CommissioCheck'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
 		allCustomer,
 		beConfirmed,
 		invalid,
 		dealed,
 		effective,
 		CommissionManage,
 		dynamicList,
 		CheckCompanyRule,
 		generalLayout,
 		autoLoaction,
 		CkPayCommissonDetail,
 		AddApply,
 		CommissioCheck
  }
})