<template>
  <div class="g-form-item">
    <component
      v-if="defaultType.includes(obj.type)"
      class="content"
      v-bind="obj.props"
      :style="limitStyle.includes(obj.type) ? 'width: 50%' : ''"
      :is="obj.type"
      @click.native.stop="showDel && onClick(boxIndex, index)"
    >
    </component>
    <component
      v-if="interType.includes(obj.type)"
      v-bind="obj.props.group"
      :is="obj.type"
      style="width: 50%"
      @click.native.stop="showDel && onClick(boxIndex, index)"
    >
      <component
        v-for="(item, index) in obj.props.child"
        v-bind="item"
        :key="index"
        :label="item.label"
        :is="obj.childTag"
      ></component>
    </component>
    <Button
      class="btn"
      v-if="showDel"
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
    showDel: {
      Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultType: [
        "Input",
        "i-switch",
        "InputNumber",
        "Rate",
        "DatePicker",
        "TimePicker",
        "Cascader",
      ],
      interType: ["RadioGroup", "CheckboxGroup", "Select"],
      limitStyle: ["Input", "Cascader"],
    };
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
  position: relative;
  .btn {
    position: absolute;
    right: 30%;
    top: 10%;
  }
}
</style>