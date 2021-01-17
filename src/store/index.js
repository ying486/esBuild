import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      {
        type: "Input",
        name: "Switch 开关",
        options: { placeholder: "", disabled: false, readonly: false, maxlength: 10 },
        key: 123
      },
    ],
    currentOpts: {}
  },
  mutations: {
    // 添加
    add(state, data) {
      const key = (new Date()).getTime()
      state.componentList.splice(data.index, 0, {
        key,
        ...data.value[data.index]
      })
    },
    select(state, data) {
      state.currentOpts = state.componentList[data].options
    },
    // 清空组件
    clearAll(state) {
      state.componentList.splice(0, state.componentList.length)
    }
  },
  actions: {
  },
})
