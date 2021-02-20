<template>
  <Modal
    class="row-model"
    v-model="showModel"
    title="栅格比例"
    width="350px"
    footer-hide
    @on-visible-change="onVisiblechange"
  >
    <RadioGroup v-model="props.col" type="button" @on-change="onChange">
      <Radio label="24"></Radio>
      <Radio label="12:12"></Radio>
      <Radio label="8:8:8"></Radio>
      <Radio label="6:6:6:6"></Radio>
      <Radio label="16:8"></Radio>
    </RadioGroup>
  </Modal>
</template>

<script>
export default {
  name: "previewModel",
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
    props() {
      return this.$store.state.currentProps;
    },
  },
  methods: {
    onVisiblechange(val) {
      this.showModel = val;
    },
    onChange() {
      this.$emit("close", false);
    },
  },
  watch: {
    value: {
      handler(show) {
        this.showModel = show;
      },
      immediate: true,
    },
    showModel(show) {
      !show && this.$emit("close", show);
    },
    "props.col"(val) {
      this.props.colList = val.split(":");
    },
  },
};
</script>

<style lang="less" >
.row-model {
}
</style>