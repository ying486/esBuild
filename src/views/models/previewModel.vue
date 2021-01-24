<template>
  <Modal
    class="preview-model"
    v-model="showModel"
    title="预览"
    width="60%"
    @on-visible-change="onVisiblechange"
  >
    <div
      v-for="(box, boxIndex) in componentList"
      :key="boxIndex"
      :class="box.name === 'Row' ? 'rowClass' : 'columnClass'"
    >
      <g-form-item
        v-for="(item, index) in box.children"
        :key="item.key"
        :obj="item"
        :boxIndex="boxIndex"
        :index="index"
      ></g-form-item>
    </div>
  </Modal>
</template>

<script>
import GFormItem from "../../components/gFormItem";

export default {
  name: "previewModel",
  components: { GFormItem },
  props: {
    value: {
      Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModel: false,
    };
  },
  computed: {
    componentList() {
      return this.$store.state.componentList;
    },
  },
  methods: {
    onVisiblechange(val) {
      this.showModel = val;
      this.$parent.showPreviewModel = val;
    },
  },
  watch: {
    value: {
      handler(show) {
        this.showModel = show;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" >
.preview-model {
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