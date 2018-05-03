import Vue from 'vue'
import Router from 'vue-router'
//导入组件
import login from '@/components/user/login'
import forgetPassword from '@/components/user/forgetPassword'
import projectInfo from '@/components/buildingdictionary/projectinfo'
import generalLayout from '@/components/buildingdictionary/generalLayout'
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
import CheckCompanyRule from '@/components/rulemaid/CheckCompanyRule'
import choseCompany from '@/components/rulemaid/choseCompany'
import SetRule from '@/components/rulemaid/SetRule'

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
        }
        ]
    }, ]
})