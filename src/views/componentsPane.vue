<template>
  <div class="components-pane">
    <Menu :open-names="['form']" width="100%">
      <Submenu name="layout">
        <template slot="title">
          <Icon type="ios-analytics" />
          布局设置
        </template>
        <MenuItem name="1-1">Row</MenuItem>
        <MenuItem name="1-2">Column</MenuItem>
      </Submenu>
      <Submenu name="form">
        <template slot="title">
          <Icon type="ios-filing" />
          表单组件
        </template>
        <draggable v-model="menuList" :options="dragOpts" :sort="false">
          <transition-group>
            <MenuItem
              v-for="item in menuList"
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
      menuList: [
        {
          type: "Input",
          name: "Input 输入框",
          options: { width: 100, defaultValue: "", placeholder: "" },
        },
        {
          type: "Radio",
          name: "Radio 单选框",
          options: { width: 100, defaultValue: "" },
        },
      ],
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
