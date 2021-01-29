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
            type: "RadioGroup",
            name: "Radio 单选框组",
            childTag: "Radio",
            props: {
              labelName: "单选名",
              group: {
                'v-model': 'defaultRadio',
                type: null, // "button"
                size: 'default', // ['default','large','small']
                vertical: false
              },
              child: [
                {
                  label: "label 1",
                  size: 'default', // ['default','large','small']
                  disabled: false,
                  border: false,
                },
              ]
            },
            styles: [
              {
                name: "text-align",
                value: "right",
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
        ...JSON.parse(JSON.stringify(state.componentList[boxIndex].children[index])), // 解决数据存储地址相同问题
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
