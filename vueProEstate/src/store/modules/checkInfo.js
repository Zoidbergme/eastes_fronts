import $http from 'axios'
import Rooturl from '../../../static/Rooturl'


const state={
	sels:'',
	builds:[],
	totalData:''
}

const mutations={
	getBuild(state,payload){
		state.builds=payload.res;
		state.totalData=payload.totalData
	},
	addBuidData(state,payload){
		state.sels=payload
	}
}

const actions={
	 getBuild({commit}){
  	 	let url=Rooturl.Rooturl+'project/build/list';
  	 	$http.get(url,{
  	 		params:{
  	 			project_id:1
  	 		}
  	 	}).then(res=>{
  	 		console.log(res.data);
  	 		commit({
  	 			type:'getBuild',
  	 			res:res.data.data.data,
  	 			totalData:res.data
  	 		})
  	 	})
  	 }
}

export default {
	state,
	mutations,
	actions
}
