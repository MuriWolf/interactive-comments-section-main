import { createStore } from 'vuex'

const store = createStore({
    state: {
        reloadPage: false
    },
    mutations: {
        alternateReloadPage(state, paylaod) {
            state.reloadPage = paylaod
        }
    }
})

export default store;