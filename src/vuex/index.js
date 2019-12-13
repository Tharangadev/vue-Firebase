import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		error:"",
		sucessAlert:"",
		userdetails:{}
	},
	mutations:{
		addError:(state,error)=>{
			state.error=error
		},
		sucessAlert:(state,sucessM)=>{
			state.sucessAlert=sucessM
		},
		adduserdetails:(state,details)=>{
			state.userdetails=details
		}
	},
	actions:{
		addError:(context,error)=>{
				context.commit('addError',error)
		},
		sucessAlert:(context,sucessM)=>{
			context.commit('sucessAlert',sucessM)
		},
		adduserdetails:(context,userdetails)=>{
			context.commit('adduserdetails',userdetails)
		}
	}

})
