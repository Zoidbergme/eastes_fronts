import Router from 'vue-router'
import Vue from 'vue'

import login from '@/components/user/login'
import forgetPassword from '@/components/user/forgetPassword'
import projectInfo from '@/components/buildingdictionary/projectinfo'
import ChangeDynamicList from '@/components/buildingdictionary/ChangeDynamicList'
import BuildingDetail from '@/components/buildingdictionary/BuildingDetail'
import AddDynamicList from '@/components/buildingdictionary/AddDynamicList'
import autoLoaction from '@/components/buildingdictionary/autoLoaction'
import palnPho from '@/components/buildingdictionary/palnPho'
import generalLayout from '@/components/buildingdictionary/generalLayout'
import AddInfo  from '@/components/buildingdictionary/AddInfo'
import effectPic  from '@/components/buildingdictionary/effectPic'
import thressDPic from '@/components/buildingdictionary/thressDPic'
import LivePic  from '@/components/buildingdictionary/LivePic'
import checkInfo from '@/components/buildingdictionary/checkInfo'
import projectImg from '@/components/buildingdictionary/projectImg'
import categoryImg from '@/components/buildingdictionary/categoryImg'
import apartmentInfo from '@/components/buildingdictionary/apartmentInfo'
import checkApartment from '@/components/buildingdictionary/checkApartment'
import proAnaly from '@/components/buildingdictionary/proAnaly'
import dynamicList from '@/components/buildingdictionary/dynamicList'
import allCustomer from '@/components/customerManagement/allCustomer'
import beConfirmed from '@/components/customerManagement/beConfirmed'
import ckBeConfirmed from '@/components/customerManagement/ckBeConfirmed'
import effective from '@/components/customerManagement/effective'
import ckEffective from '@/components/customerManagement/ckEffective'
import invalid from '@/components/customerManagement/invalid'
import ckInvalid from '@/components/customerManagement/ckInvalid'
import dealed from '@/components/customerManagement/dealed'
import ckDeal from '@/components/customerManagement/ckDeal'
import register from '@/components/user/register'
import secRegister from '@/components/user/secRegister'
import index from '@/components/index/index'
import examine from '@/components/companymanagement/examine'
import examinePass from '@/components/companymanagement/examinePass'
import examineNotPass from '@/components/companymanagement/examineNotPass'
import examineCheck from '@/components/companymanagement/examineCheck'
import Commissio from '@/components/rulemaid/Commissio'
import CommissioCheck from '@/components/rulemaid/CommissioCheck'
import AddTotalRule from '@/components/rulemaid/AddTotalRule'
import AddCompanyRule from '@/components/rulemaid/AddCompanyRule'
import CheckCompanyRule from '@/components/rulemaid/CheckCompanyRule'
import choseCompany from '@/components/rulemaid/choseCompany'
import SetRule from '@/components/rulemaid/SetRule'
import CheckJumpPointRule from '@/components/rulemaid/CheckJumpPointRule'
import endContract from '@/components/rulemaid/endContract'
import CheckPersonRule from '@/components/rulemaid/CheckPersonRule'
import AddPersonDealRule from '@/components/rulemaid/AddPersonDealRule'
import AddPersonVisitRule from '@/components/rulemaid/AddPersonVisitRule'
import CheckTotalRule from '@/components/rulemaid/CheckTotalRule'
import EndTotalRule from '@/components/rulemaid/EndTotalRule'
import RecomposeTotalRule from '@/components/rulemaid/RecomposeTotalRule'
import PersonCommission from '@/components/CommissionManagement/PersonCommission'
import CompanyCommission from '@/components/CommissionManagement/CompanyCommission'
import CkAndCgComDealRule from '@/components/rulemaid/CkAndCgComDealRule'
import CkPayCommission from '@/components/CommissionManagement/CkPayCommission'
import CkPayCommissonDetail from '@/components/CommissionManagement/CkPayCommissonDetail'
import AddApply from '@/components/CommissionManagement/AddApply'
import SubApplyCount from '@/components/CommissionManagement/SubApplyCount'
import PayApplyCheck from '@/components/CommissionManagement/PayApplyCheck'
import CheckPayCheckPayment from '@/components/CommissionManagement/CheckPayCheckPayment'
import PersonPaymentCheck from '@/components/CommissionManagement/PersonPaymentCheck'
import PersonCheckAddView from '@/components/CommissionManagement/PersonCheckAddView'
import PersonCheckAddApplyView from '@/components/CommissionManagement/PersonCheckAddApplyView'
import PersonCheckCheckSubView from '@/components/CommissionManagement/PersonCheckCheckSubView'
import PersonCheckPayApplyView from '@/components/CommissionManagement/PersonCheckPayApplyView'
import PersonCheckPayCheckView from '@/components/CommissionManagement/PersonCheckPayCheckView'
import PerCheckOncePayCheckView from '@/components/CommissionManagement/PerCheckOncePayCheckView'
import PersonCheckPayFaild from '@/components/CommissionManagement/PersonCheckPayFaild'
import PersonAccessoryAddCheckChange from '@/components/CommissionManagement/PersonAccessoryAddCheckChange'
import ToBeComfirmed from '@/components/BrokersManagement/ToBeComfirmed' 
import VerifiedPerson  from '@/components/BrokersManagement/VerifiedPerson'  
import AuditFailure  from '@/components/BrokersManagement/AuditFailure' 
import ToBeConfirmCheck  from '@/components/BrokersManagement/ToBeConfirmCheck' 
import ToBeConfilmAudit  from '@/components/BrokersManagement/ToBeConfilmAudit'  
import addHouseInfo from  '@/components/buildingdictionary/addHouseInfo'
import CheckCompanypPayRule from '@/components/rulemaid/CheckCompanypPayRule'

Vue.use(Router)
 
export default new Router({
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {

        path: '/forgetPassword',
        component: forgetPassword

    }, {
        path: '/register',
        component: register
    }, {
        path: '/secRegister',
        component: secRegister
    }, {
        path: '/index',
        name: 'index',
        component: index,
        children: [{
            path: '/',
            redirect: '/index/projectinfo'
        }, {
            path: '/index/examine',
            component: examine
        }, {
            path: '/index/examinepass',
            component: examinePass
        }, {
            path: '/index/examinenotpass',
            component: examineNotPass
        }, {
            path: '/index/examinecheck',
            component: examineCheck
        }, {
            path: '/index/projectinfo',
            component: projectInfo
        }, {
            path: '/index/generalLayout',
            component: generalLayout
        }, {
            path: '/index/checkInfo',
            component: checkInfo
        }, {
            path: '/index/projectImg',
            component: projectImg
        }, {
            path: '/index/categoryImg',
            component: categoryImg
        }, {
            path: '/index/apartmentInfo',
            component: apartmentInfo
        }, {
            path: '/index/checkApartment',
            component: checkApartment
        }, {
            path: '/index/proAnaly',
            component: proAnaly
        }, {
            path: '/index/dynamicList',
            component: dynamicList
        }, {
            path: '/index/allCustomer',
            component: allCustomer
        }, {
            path: '/index/beConfirmed',
            component: beConfirmed
        }, {
            path: '/index/effective',
            component: effective
        }, {
            path: '/index/invalid',
            component: invalid
        }, {
            path: '/index/dealed',
            component: dealed
        }, {
            path: '/index/ckBeConfirmed',
            component: ckBeConfirmed
        }, {
            path: '/index/ckEffective',
            component: ckEffective
        }, {
            path: '/index/ckInvalid',
            component: ckInvalid
        }, {
            path: '/index/ckInvalid',
            component: ckInvalid
        }, {
            path: '/index/ckDeal',
            component: ckDeal
        },
        {
        	path:"/index/CommissioCheck",
        	component:CommissioCheck
        },
        {
        	path:'/index/AddTotalRule',
        	component:AddTotalRule
        },
        {
        	path:'/index/CheckCompanyRule',
        	component:CheckCompanyRule
        },
        {
        	path:'/index/choseCompany',
        	component:choseCompany
        },
        {
        	path:'/index/SetRule',
        	component:SetRule
        },{
        	path:'/index/CheckJumpPointRule',
        	component:CheckJumpPointRule     
        },
        {
        	path:'/index/endContract',
        	component:endContract     
        },
        {
        	path:'/index/CheckPersonRule',
        	component:CheckPersonRule     
        },
        {
        	path:'/index/AddPersonDealRule',
        	component:AddPersonDealRule     
        },
         {
        	path:'/index/AddPersonVisitRule',
        	component:AddPersonVisitRule    
        },
         {
        	path:'/index/CheckTotalRule',
        	component:CheckTotalRule    
        },
        {
        	path:'/index/EndTotalRule',
        	component: EndTotalRule  
        },
        {
        	path:'/index/RecomposeTotalRule',
        	component:RecomposeTotalRule 
        },
        {
        	path:'/index/PersonCommission',
        	component:PersonCommission
        },
        {
        	path:'/index/CompanyCommission',
        	component:CompanyCommission
        
        },
        {
        	path:'/index/AddDynamicList',
        	component:AddDynamicList
        	
        },
        {
        	path:'/index/ChangeDynamicList',
        	component: ChangeDynamicList
        },
        {
        	path:'/index/CkAndCgComDealRule',
        	component: CkAndCgComDealRule
        },
        {
        	path:'/index/BuildingDetail',
        	component:BuildingDetail
        },
        {
        	path:'/index/AddInfo',
        	component:AddInfo,
        	name:'AddInfo'
        },
        {
        	path:'/index/autoLoaction',
        	component:autoLoaction
        },
        {
        	path:'/index/CkPayCommission',
        	component:CkPayCommission
        },
        {
        	path:'/index/CkPayCommissonDetail',
        	component:CkPayCommissonDetail	
        },
        {

        	path:'/index/AddApply',
        	component:AddApply	
        },
        {
        	path:'/index/SubApplyCount',
        	component:SubApplyCount
        },
        {
        	path:'/index/PayApplyCheck',
        	component:PayApplyCheck
        },
        {
        	path:'/index/CheckPayCheckPayment',
        	component:CheckPayCheckPayment
        },
        {
        	path:'/index/PersonPaymentCheck',
        	component:PersonPaymentCheck
        },
        {
        	path:'/index/PersonCheckAddView',
        	component:PersonCheckAddView
        },
        {
        	path:'/index/PersonCheckCheckSubView',
        	component:PersonCheckCheckSubView 	
        },
        {
        	path:'/index/PersonCheckAddApplyView',
        	component:PersonCheckAddApplyView	
        },
        {       	
        	path:'/index/PersonCheckPayApplyView',
        	component:PersonCheckPayApplyView	
        },
        {
        	
        	path:'/index/PersonCheckPayCheckView',
        	component:PersonCheckPayCheckView	
        },
        {
        	path:'/index/PerCheckOncePayCheckView',
        	component:PerCheckOncePayCheckView
        },
        {    	
        	path:'/index/PersonCheckPayFaild',
        	component:PersonCheckPayFaild
        },
        {
        	path:'/index/PersonAccessoryAddCheckChange',
        	component:PersonAccessoryAddCheckChange
        },
        {
        	path:'/index/ToBeComfirmed',
        	component:ToBeComfirmed
        },
        {
        	path:'/index/VerifiedPerson',
        	component:VerifiedPerson 
        },
        {
        	path:'/index/AuditFailure',
        	component:AuditFailure
        },
        {
        	path:'/index/ToBeConfirmCheck',
        	component:ToBeConfirmCheck
        },
        {
        	path:'/index/ToBeConfilmAudit',
        	component:ToBeConfilmAudit
        },
        {
        	path:"/index/ToBeConfirmCheck",
        	component:ToBeConfirmCheck
        },
        {
        	path:"/index/ToBeConfilmAudit",
        	component:ToBeConfilmAudit
        },
        {
        	path:"/index/addHouseInfo",
        	component:addHouseInfo
        },
        {	
        	path:'/index/AddCompanyRule',
        	component:AddCompanyRule
        },
        {
        	path:'/index/CheckCompanypPayRule',
        	component:CheckCompanypPayRule
        }
        ]
    }, ]
})