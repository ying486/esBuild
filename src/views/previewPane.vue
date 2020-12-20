<template>
  <div class="preview-pane">
    预览面板
    <draggable v-model="componentList" group="site">
      <transition-group>
        <MenuItem v-for="item in componentList" :name="item.id" :key="item.id">
          {{ item.name }}
        </MenuItem>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
export default {
  name: "previewPane",
  data() {
    return {
      componentList: [
        { id: "2-1", name: "Input 输入框" },
        { id: "2-2", name: "Radio 单选框" },
      ],
    };
  },
};
</script>

<style>
.preview-pane {
  width: calc(100% - 500px);
  height: 100%;
  padding: 10px;
}
</style>