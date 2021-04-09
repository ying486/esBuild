<template>
  <Form class="preview-pane" label-position="right" :label-width="100">
    <div class="tag" style="width: 60px">Column</div>
    <draggable
      v-model="componentList"
      group="layout"
      animation="500"
      :style="containerStyle"
    >
      <div v-for="(box, boxIndex) in componentList" :key="boxIndex">
        <div class="tag-contaner">
          <div class="tag" v-if="box.name === 'Row'" @click="onBox(boxIndex)">
            {{ `${box.name} ${box.col}` }}
            <Icon type="ios-create-outline" />
          </div>
          <div class="tag" v-else>{{ box.name }}</div>
          <div class="tag" @click="onDelBox(boxIndex)">delete</div>
        </div>
        <!-- row -->
        <draggable
          v-if="box.name === 'Row'"
          v-model="box.children"
          v-bind="rowContainerOpts(box)"
          animation="500"
          :style="rowBoxStyle"
          @add="onAdd(boxIndex, $event)"
        >
          <Col
            v-for="(item, index) in box.children"
            :key="index"
            :span="box.colList[index]"
          >
            <FormItem :label="item.props.labelName">
              <g-form-item
                :obj="item"
                :boxIndex="boxIndex"
                :index="index"
                :showDel="true"
              ></g-form-item>
            </FormItem>
          </Col>
        </draggable>
        <!-- row -->
        <!-- column -->
        <draggable
          v-else
          v-model="box.children"
          group="site"
          animation="500"
          :style="columnBoxStyle"
          @add="onAdd(boxIndex, $event)"
        >
          <FormItem
            v-for="(item, index) in box.children"
            :key="item.key"
            :label="item.props.labelName"
          >
            <g-form-item
              :obj="item"
              :boxIndex="boxIndex"
              :index="index"
              :showDel="true"
            ></g-form-item>
          </FormItem>
        </draggable>
        <!-- column -->
      </div>
      <!-- <div>{{ componentList }}</div> -->
    </draggable>
    <row-model v-model="showRowModel" @close="onClose"></row-model>
  </Form>
</template>

<script>
import { getNewObjFromList } from "../utils/tools";
import GFormItem from "../components/gFormItem";
import RowModel from "./models/rowModel";

export default {
  name: "previewPane",
  components: { GFormItem, RowModel },
  data() {
    return {
      containerStyle: {
        width: "100%",
        height: "97%",
        border: "2px solid #e0e0e0",
        "border-radius": "0 5px 5px 5px",
        display: "flex",
        "flex-direction": "column",
        padding: "0 5px",
      },
      rowBoxStyle: {
        width: "100%",
        "min-height": "80px",
        border: "2px solid #e0e0e0",
        "border-radius": "0 0 5px 5px",
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
      },
      columnBoxStyle: {
        width: "100%",
        "min-height": "80px",
        border: "2px solid #e0e0e0",
        "border-radius": "0 0 5px 5px",
      },
      showRowModel: false,
    };
  },
  computed: {
    componentList: {
      get() {
        return this.$store.state.componentList;
      },
      set(value) {
        if (this.componentList.length !== value.length) {
          const index = getNewObjFromList(this.componentList, value);
          this.$store.commit("addBox", { index, value });
        } else {
          this.$store.commit("move", value);
        }
      },
    },
  },
  methods: {
    onAdd(boxIndex, event) {
      this.$store.commit("add", { boxIndex, index: event.newIndex });
    },
    onDelBox(boxIndex) {
      this.$store.commit("delBox", boxIndex);
    },
    onBox(boxIndex) {
      this.$store.commit("selectBox", boxIndex);
      this.showRowModel = true;
    },
    // 关闭模态框
    onClose() {
      this.showRowModel = false;
    },
    // 当超过数量时不可再拖拽添加
    canPut(box) {
      const colList = box.col.split(":");
      if (box.children.length < colList.length) {
        return true;
      }
      return false;
    },
    rowContainerOpts(box) {
      return { group: { name: "site", put: this.canPut(box) } };
    },
  },
};
</script>

<style lang="less">
.preview-pane {
  width: calc(100% - 500px);
  height: 100%;
  padding: 5px;
  .tag-contaner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .tag {
    min-width: 60px;
    height: 20px;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 5px 5px 0 0;
    background-color: #e0e0e0;
    margin-top: 3px;
    padding: 0 5px;
  }
}
</style>