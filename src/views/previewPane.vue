<template>
  <Form class="preview-pane" label-position="right" :label-width="100">
    <div class="tag" style="width: 60px">Column</div>
    <draggable
      v-model="componentList"
      group="layout"
      animation="500"
      :style="containerStyle"
    >
      <div
        v-for="(box, boxIndex) in componentList"
        :key="boxIndex"
        @click="box.name === 'Row' && onBox(boxIndex)"
      >
        <div class="tag-contaner">
          <div class="tag" v-if="box.name === 'Row'">
            {{ `${box.name} ${box.col}` }}
          </div>
          <div class="tag" v-else>{{ box.name }}</div>
          <div class="tag" @click="onDelBox(boxIndex)">delete</div>
        </div>
        <!-- row -->
        <draggable
          v-if="box.name === 'Row'"
          v-model="box.children"
          group="site"
          animation="500"
          :style="boxStyle"
          :disabled="isDisabled(box)"
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
          :style="boxStyle"
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
  </Form>
</template>

<script>
import { getNewObjFromList } from "../utils/tools";
import GFormItem from "../components/gFormItem";

export default {
  name: "previewPane",
  components: { GFormItem },
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
      boxStyle: {
        width: "100%",
        "min-height": "100px",
        border: "2px solid #e0e0e0",
        "border-radius": "0 0 5px 5px",
      },
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
      if (this.$route.name !== "Box") {
        this.$router.push({ name: "Box" });
      }
    },
    // 当超过数量时不可再拖拽添加
    isDisabled(box) {
      const colList = box.col.split(":");
      if (box.children.length >= colList.length) {
        return true;
      }
      return false;
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
  }
}
</style>