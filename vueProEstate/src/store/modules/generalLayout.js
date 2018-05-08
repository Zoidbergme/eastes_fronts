const state={
	project_id:'',
	build_id:''
}
const mutations={
	generalLayout(state,payload){
		state.build_id=payload
	},
	addProId(state,payload){	
		state.project_id=payload
	}
}

export default{
	state,
	mutations
}
