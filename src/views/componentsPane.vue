<template>
  <div class="components-pane">
    <Menu active-name="1-2" :open-names="['2']" width="100%">
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-analytics" />
          布局设置
        </template>
        <MenuItem name="1-1">Row</MenuItem>
        <MenuItem name="1-2">Column</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-filing" />
          表单组件
        </template>
        <draggable v-model="menuList" :options="dragOpts">
          <transition-group>
            <MenuItem v-for="item in menuList" :name="item.id" :key="item.id">
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
        { id: "2-1", name: "Input 输入框" },
        { id: "2-2", name: "Radio 单选框" },
      ],
      dragOpts: {
        group: { name: "site", pull: "clone" },
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
}
</style>
