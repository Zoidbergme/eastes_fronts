import $http from 'axios'
import Rooturl from '../../../static/Rooturl'
import qs from 'qs'


const state={	
	ImgCount:[]
}


const mutations={
	addImgs(state,payload){
		state.ImgCoun=payload.res
	}
}

const actions={
	addImgs({commit},payload){
		let url=Rooturl.Rooturl+"project/img/getTypeListCount";
		$http.get(url).then(res=>{
			console.log(res.data);
			commit({
				type:'addImgs',
				res:res.data
			})
		})
	},
	getImgList({commit},payload){
		let url=Rooturl.Rooturl+"project/housetype/getList";
		$http.get(url,{
			params:{
				img_type:'1'
			}
		}).then(res=>{
			console.log(res.data);
		})
	}
	
	
}


export default{
	state,
	mutations,
	actions
}
