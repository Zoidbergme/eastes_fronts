const state={
	project_id:''
}
const mutations={
	addComRule(state,payload){
		state.project_id=payload
	}
}

export default{
	state,
	mutations
}
