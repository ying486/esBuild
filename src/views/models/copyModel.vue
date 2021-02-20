<template>
  <Modal
    class="copy-model"
    v-model="showModel"
    width="60%"
    title="表单代码"
    ok-text="复制"
    @on-ok="onOk"
    @on-visible-change="onVisiblechange"
  >
    <Input
      id="code"
      :value="code"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 16 }"
      readonly
    ></Input>
    <!-- <textarea id="code" cols="30" rows="10" :value="code"></textarea> -->
  </Modal>
</template>

<script>
export default {
  name: "copyModel",
  props: {
    value: {
      Boolean,
      default: false,
    },
    code: {
      String,
      default: "",
    },
  },
  data() {
    return {
      showModel: false,
    };
  },
  methods: {
    // 复制到剪贴板
    onOk() {
      var aux = document
        .getElementById("code")
        .getElementsByTagName("textarea")[0];
      aux.select();
      document.execCommand("copy");
      this.$Message.success("复制成功");
    },
    onVisiblechange(val) {
      this.showModel = val;
      this.$parent.showCopyModel = val;
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
.copy-model {
}
</style>