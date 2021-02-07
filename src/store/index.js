import Vue from 'vue'
import Vuex from 'vuex'
import { deepClone } from '../utils/tools';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    componentList: [
      {
        name: 'Column',
        children: [
          {
            type: "Input",
            name: "测试",
            props: {
              labelName: "Input",
              'v-model': 'defaultInput',
              type: 'text', // ['text','password','textarea','url','email','date','number','tel']
              size: 'default', // ['default','large','small']
              placeholder: "",
              maxlength: null,
              'show-word-limit': false,
              rows: null,
              icon: '',
              prefix: '',
              suffix: '',
              clearable: false,
              disabled: false,
              readonly: false,
              password: false,
              search: false,
              'enter-button': false,
              autosize: false,
              number: false,
              autofocus: false,
            },
            styles: [
              {
                name: 'text-align',
                value: "right"
              }
            ],
            key: 123
          },
          {
            type: "InputNumber",
            name: "InputNumber 数字输入框",
            props: {
              labelName: "InputNumber",
              'v-model': 'defaultInputNumber',
              size: 'default', // ['default','large','small']
              placeholder: "",
              max: Infinity,
              min: -Infinity,
              step: 1,
              precision: null,
              'controls-outside': false,
              disabled: false,
              readonly: false,
              editable: true,
              'active-change': false
            },
            styles: [
              {
                name: "text-align",
                value: "right", // ["left", "center", "right"],
              },
            ],
            key: 1234
          },
        ],
        key: 111
      },

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
    },
    // 添加组件
    add(state, data) {
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
