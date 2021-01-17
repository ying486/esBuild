<template>
  <div class="preview-pane">
    预览面板
    <draggable v-model="componentList" group="site">
      <transition-group>
        <div v-for="(item, index) in componentList" :key="item.key">
          <component
            class="item"
            :is="item.type"
            v-bind="item.options"
            @click.native="onClick(index)"
          >
          </component>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import { getNewObjFromList } from "../utils/tools";

export default {
  name: "previewPane",
  data() {
    return {};
  },
  computed: {
    componentList: {
      get() {
        return this.$store.state.componentList;
      },
      set(value) {
        const index = getNewObjFromList(this.componentList, value);
        this.$store.commit("add", { index, value });
      },
    },
  },
  methods: {
    onClick(index) {
      this.$store.commit("select", index);
    },
  },
};
</script>

<style lang="less">
.preview-pane {
  width: calc(100% - 500px);
  height: 100%;
  padding: 10px;
  .item {
    margin: 5px 0;
  }
}
</style>