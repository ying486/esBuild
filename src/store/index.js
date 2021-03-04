import Vue from 'vue'
import Vuex from 'vuex'
import { deepClone } from '../utils/tools';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      // {
      //   col: "12:12",
      //   colList: ["12", "12"],
      //   name: "Row",
      //   num: 1,
      //   width: "100%",
      //   children: [],
      //   key: 123
      // },
    ],
    currentProps: {},
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
      console.log(state.componentList, "com");
    },
    // 添加组件
    add(state, data) {
      console.log(state, "stte");
      const index = data.index;
      const boxIndex = data.boxIndex;
      const key = (new Date()).getTime()
      Vue.set(state.componentList[boxIndex].children, index, {
        ...deepClone(state.componentList[boxIndex].children[index]), // 解决数据存储地址相同问题
        key
      })
    },
    // 移动
    move(state, list) {
      state.componentList = JSON.parse(JSON.stringify(list))
    },
    // 选择盒子
    selectBox(state, index) {
      state.currentProps = state.componentList[index]
      // state.currentStyles = state.componentList[data.boxIndex].children[data.index].styles
    },
    // 选择单个组件
    select(state, data) {
      state.currentProps = state.componentList[data.boxIndex].children[data.index].props
      state.currentStyles = state.componentList[data.boxIndex].children[data.index].styles
    },
    // 删除盒子index
    delBox(state, index) {
      state.componentList.splice(index, 1)
    },
    // 删除组件
    del(state, data) {
      state.componentList[data.boxIndex].children.splice(data.index, 1)
    },
    // 清空组件
    clearAll(state) {
      state.componentList.splice(0, state.componentList.length)
      state.currentProps = {}
      state.currentStyles = {}
    }
  },
  actions: {
  },
})
