import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        showLoading: false
    },
    mutations: {
        switch_loading(state) {
            state.showLoading = !state.show;
        }
    },
    actions:{
        switch_loading(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_loading');
            //你还可以在这里触发其他的mutations方法
        },
    }
})