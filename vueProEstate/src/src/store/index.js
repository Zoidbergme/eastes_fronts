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
 		CheckCompanyRule
  }
})