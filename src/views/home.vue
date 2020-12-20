<template>
  <div class="home">
    <div class="top">
      <Icon class="icon" size="26" type="ios-outlet-outline" />
      <div class="title">EsBuild 1.0</div>
      <Button class="code-btn" type="primary" size="small" icon="md-code">
        开发
      </Button>
      <Button class="code-btn" type="primary" size="small" icon="ios-trash">
        清空
      </Button>
    </div>
    <div class="pane">
      <components-pane></components-pane>
      <preview-pane></preview-pane>
      <props-pane></props-pane>
    </div>
  </div>
</template>

<script>
import ComponentsPane from "./componentsPane";
import PreviewPane from "./previewPane";
import PropsPane from "./propsPane";

export default {
  name: "home",
  components: {
    ComponentsPane,
    PreviewPane,
    PropsPane,
  },
};
</script>
<style lang="less">
.home {
  height: 100vh;
  .top {
    width: 100%;
    height: 36px;
    background-color: #252526;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    .icon {
      color: #fff;
    }
    .title {
      color: #fff;
      margin: 0 74px 0 10px;
    }
    .code-btn {
      margin-left: 10px;
    }
  }
  .pane {
    width: 100%;
    height: calc(100% - 36px);
    display: flex;
    flex-direction: row;
  }
}
</style>