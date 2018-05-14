import $http from 'axios'
import Rooturl from '../../../static/Rooturl'
import qs from 'qs'

const state={
	clearData:{
 		 ys_build_id:'',
  		 sale_permit:'',
 		 permit_time:'',
		 open_way:'',
		 open_time:'',
		 handing_room_time:'',
		 unit_num:'',
		 uppper_floor_num:'',
 		 down_floor_num:'',
		ladder_ratio:'',
		total_house_num:''
	},
	formData:''
}

const mutations={
	clearData(state,payload){
		state.formData={...payload.clear}
	}
}

const actions={
	UpdateBuildDetail({commit,state},payload){
		let url =Rooturl.Rooturl+"project/build/add";
		$http.post(url, qs.stringify({
			...payload
		})).then(res=>{
			console.log(res.data);
			if(res.data.code=='200'){
				alert(res.data.data.msg);
				commit({
					type:"clearData",
					clear:state.clearData
				})
			}else if(res.data.code=='400'){
				alert(res.data.msg)
			}
		}).catch(err=>{
			console.log(err);
		})
	}
}

export default{
	state,
	mutations,
	actions
}
