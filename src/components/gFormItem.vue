<template>
  <div class="g-form-item">
    <div class="label" :style="changeStyle">{{ obj.options.label }}</div>
    <component
      class="content"
      :is="obj.type"
      v-bind="obj.options"
      @click.native="show && onClick(boxIndex, index)"
    >
    </component>
    <Button
      v-if="show"
      type="primary"
      size="small"
      icon="md-close"
      @click="onDelete(boxIndex, index)"
    ></Button>
  </div>
</template>

<script>
export default {
  name: "gFormItem",
  props: {
    obj: {
      Object,
      default: () => {
        return {};
      },
    },
    boxIndex: {
      Number,
      default: 0,
    },
    index: {
      Number,
      default: 0,
    },
    show: {
      Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    changeStyle() {
      let data = {};
      for (let item of this.obj.styles) {
        data[item.name] = item.value;
      }
      return data;
    },
  },
  methods: {
    // 点击组件
    onClick(boxIndex, index) {
      this.$store.commit("select", { boxIndex, index });
      if (this.$route.name !== this.obj.type) {
        this.$router.push({ name: this.obj.type });
      }
    },
    // 删除组件
    onDelete(boxIndex, index) {
      this.$store.commit("del", { boxIndex, index });
    },
  },
};
</script>
<style lang="less">
.g-form-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  .label {
    width: 100px;
    text-align: left;
  }
  .content {
    margin: 0 5px;
  }
}
</style>