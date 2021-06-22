import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isUserLogged: false
    },
    actions: {
        validateUserSession({commit}){
            const userSession = sessionStorage.getItem('userSession');
            commit('isUserLogged', userSession)
        },
    },
    mutations: {
        isUserLogged(state, userSession){
            if(userSession==null){
                state.isUserLogged = false;
            } else{
                state.isUserLogged = true;
            }
        }
    }
})