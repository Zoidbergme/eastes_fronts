const state={
	project_id:''
}
const mutations={
	CommissioCheck(state,payload){
		state.project_id=payload
	}
}

export default{
	state,
	mutations
}
