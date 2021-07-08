import {createStore} from 'vuex'
export default createStore({
    state:{name:"india"},
    getters:{
      getName: state=>{return state.name}
    },
    mutations: {
      changeName(state,name){
        state.name=name;
      }
    },
    actions:{
      changeName (context,name) {
        context.commit('changeName',name)
      }
    }
  })
