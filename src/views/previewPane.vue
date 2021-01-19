<template>
  <div class="preview-pane">
    <div class="tag">Column</div>
    <draggable
      v-model="componentList"
      group="layout"
      animation="500"
      :style="containerStyle"
    >
      <div v-for="(box, boxIndex) in componentList" :key="boxIndex">
        <div class="tag-contaner">
          <div class="tag">{{ box.name }}</div>
          <div class="tag" @click="onDelBox(boxIndex)">delete</div>
        </div>
        <draggable
          v-model="box.children"
          group="site"
          animation="500"
          :class="box.name === 'Row' ? 'rowClass' : 'columnClass'"
          :style="boxStyle"
        >
          <g-form-item
            v-for="(item, index) in box.children"
            :key="item.key"
            :obj="item"
            :boxIndex="boxIndex"
            :index="index"
          ></g-form-item>
        </draggable>
      </div>
    </draggable>
  </div>
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
        "align-items": "center",
      },
      boxStyle: {
        width: "666px",
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
    onDelBox(boxIndex) {
      this.$store.commit("delBox", boxIndex);
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
    width: 60px;
    height: 20px;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 5px 5px 0 0;
    background-color: #e0e0e0;
    margin-top: 3px;
  }
  .rowClass {
    display: flex;
    flex-direction: row;
  }
  .columnClass {
    display: flex;
    flex-direction: column;
  }
}
</style>