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
          v-bind="dragContainerOpts"
          :sort="false"
        >
          <MenuItem
            class="menu-item"
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
        <draggable v-model="configList" v-bind="dragOpts" :sort="false">
          <transition-group>
            <MenuItem
              class="menu-item"
              v-for="item in configList"
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
import { configList } from "./config";

export default {
  name: "componentsPane",
  data() {
    return {
      layoutList: [
        {
          name: "Row",
        },
        {
          name: "Column",
        },
      ],
      configList,
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
  .menu-item {
    font-size: 12px;
  }
  .ivu-menu {
    background-color: #eeeeee;
  }
  .fallback {
    background-color: red;
    border: 1px solid #000;
  }
}
</style>
