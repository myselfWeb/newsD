import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        showLoading: false
    },
    mutations: {
        showLoading(state) {
            state.showLoading = true;
        },
        hideLoading(state) {
            state.showLoading = false;
        },
        // 请求数据时loading
        FETCH_LOADING1 (state, res) {
            state.showLoading = res
        }
    },
    getters: {
        showLoading(state) {
            return state.showLoading
        }
    },
    actions:{
        switch_loading(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_loading');
            //你还可以在这里触发其他的mutations方法
        },
        // 请求数据时状态loading
        FETCH_LOADING({
                          commit
                      }, res) {
            commit('FETCH_LOADING1', res)
        },
    }
})