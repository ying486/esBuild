<template>
  <div class="home">
    <div class="top">
      <Icon class="icon" size="26" type="ios-outlet-outline" />
      <div class="title">EsBuild 1.0</div>

      <Button
        class="code-btn"
        type="primary"
        size="small"
        icon="ios-trash"
        @click="onClear"
      >
        清空
      </Button>
      <Button
        class="code-btn"
        type="primary"
        size="small"
        icon="md-code"
        @click="showPreviewModel = true"
      >
        预览
      </Button>
      <Button
        class="code-btn"
        type="primary"
        size="small"
        icon="md-arrow-down"
        @click="onDownload"
      >
        下载
      </Button>
    </div>
    <div class="pane">
      <components-pane></components-pane>
      <preview-pane></preview-pane>
      <props-pane></props-pane>
    </div>
    <preview-model v-model="showPreviewModel"></preview-model>
  </div>
</template>

<script>
import { handleData } from "../utils/listToDom";
import { configList } from "./config";
import ComponentsPane from "./componentsPane";
import PreviewPane from "./previewPane";
import PropsPane from "./propsPane";
import previewModel from "./models/previewModel";

export default {
  name: "home",
  components: {
    ComponentsPane,
    PreviewPane,
    PropsPane,
    previewModel,
  },
  data() {
    return {
      configList,
      showPreviewModel: false,
      PreviewPane: PreviewPane,
    };
  },
  computed: {
    componentList() {
      return this.$store.state.componentList;
    },
  },
  methods: {
    // 清空所有组件
    onClear() {
      this.$Modal.confirm({
        title: "提示",
        content: "是否要清空所有组件？",
        onOk: () => {
          this.$store.commit("clearAll");
        },
      });
    },
    // 预览
    onPreview() {
      this.showPreviewModel = true;
    },
    // 下载
    onDownload() {
      const data = handleData(this.componentList);
      console.log(data);
      // 定义文件内容，类型必须为Blob 否则createObjectURL会报错
      // let content = new Blob([data]);
      // // 生成url对象
      // let urlObject = window.URL || window.webkitURL || window;
      // let url = urlObject.createObjectURL(content);
      // // 生成<a></a>DOM元素
      // let el = document.createElement("a");
      // // 链接赋值
      // el.href = url;
      // el.download = "data.vue";
      // el.click();
      // // 移除链接释放资源
      // urlObject.revokeObjectURL(url);
    },
  },
};
</script>
<style lang="less">
.home {
  height: 100vh;
  .top {
    width: 100%;
    height: 34px;
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
