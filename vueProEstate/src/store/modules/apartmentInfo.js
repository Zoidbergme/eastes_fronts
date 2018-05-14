import $http from 'axios'
import Rooturl from '../../../static/Rooturl'


const state={
	houseData:""
}


const mutations={
	addData(state,payload){
		state.houseData=payload.data;
	}
}


const actions={
	addData({commit}){
		let url=Rooturl.Rooturl+"project/houseType/list";
		$http.get(url,{
			params:{
		
			}
		}).then(res=>{
			if(res.code==200){
				commit({
					type:'addData',
					data:res.data
				})
			}
		});
	}
}

export default{
	state,
	mutations,
	actions
}
