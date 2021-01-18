import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      {
        name: 'Row',
        children: [
          {
            type: "Input",
            name: "测试",
            options: {
              label: "默认名", placeholder: "", disabled: false, readonly: false, maxlength: 10
            },
            styles: [
              {
                name: 'text-align',
                value: "right"
              }
            ],
            key: 123
          },
        ],
        key: 111
      },

    ],
    currentOpts: {},
    currentStyles: []
  },
  mutations: {
    // 添加盒子
    addBox(state, data) {
      const key = (new Date()).getTime()
      state.componentList.splice(data.index, 0, {
        ...data.value[data.index],
        key,
        children: []
      })
      console.log(state.componentList, "addBox");
    },
    // 移动
    move(state, list) {
      state.componentList = JSON.parse(JSON.stringify(list))
    },
    // 选择单个组件
    select(state, data) {
      state.currentOpts = state.componentList[data.boxIndex].children[data.index].options
      state.currentStyles = state.componentList[data.boxIndex].children[data.index].styles
    },
    // 删除组件
    del(state, data) {
      state.componentList[data.boxIndex].children.splice(data.index, 1)
    },
    // 清空组件
    clearAll(state) {
      state.componentList.splice(0, state.componentList.length)
      state.currentOpts = {}
    }
  },
  actions: {
  },
})
