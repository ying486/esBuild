<template>
  <div class="components-pane">
    <Menu :open-names="['layout', 'form']" width="100%">
      <Submenu name="layout">
        <template slot="title">
          <Icon type="ios-analytics" />
          布局设置
        </template>
        <draggable
          v-model="layoutList"
          :options="dragContainerOpts"
          :sort="false"
        >
          <MenuItem
            v-for="item in layoutList"
            :name="item.name"
            :key="item.name"
          >
            {{ item.name }}
          </MenuItem>
        </draggable>
      </Submenu>
      <Submenu name="form">
        <template slot="title">
          <Icon type="ios-filing" />
          表单组件
        </template>
        <draggable v-model="formList" :options="dragOpts" :sort="false">
          <transition-group>
            <MenuItem
              v-for="item in formList"
              :name="item.type"
              :key="item.type"
            >
              {{ item.name }}
            </MenuItem>
          </transition-group>
        </draggable>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "componentsPane",
  data() {
    return {
      layoutList: [
        {
          name: "Row",
        },
        {
          name: "Colume",
        },
      ],
      formList: [
        {
          type: "Input",
          name: "Input 输入框",
          options: {
            label: "输入名",
            placeholder: "",
            disabled: false,
            readonly: false,
            maxlength: 10,
          },
          styles: [
            {
              name: "text-align",
              value: "right",
            },
          ],
        },
        {
          type: "Radio",
          name: "Radio 单选框",
          options: {
            label: "单选名",
            readonly: false,
          },
          styles: [
            {
              name: "text-align",
              value: "right",
            },
          ],
        },
      ],
      dragContainerOpts: {
        group: { name: "layout", pull: "clone", put: false },
        sort: true,
      },
      dragOpts: {
        group: { name: "site", pull: "clone", put: false },
        sort: true,
      },
    };
  },
  methods: {},
};
</script>

<style lang="less">
.components-pane {
  width: 200px;
  height: 100%;
  background-color: #eeeeee;

  .ivu-menu {
    background-color: #eeeeee;
  }
  .fallback {
    background-color: red;
    border: 1px solid #000;
  }
}
</style>
