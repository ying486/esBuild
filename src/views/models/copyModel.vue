<template>
  <Modal
    class="copy-model"
    v-model="showModel"
    width="60%"
    title="表单代码（双击文本框复制到粘贴板）"
    @on-visible-change="onVisiblechange"
  >
    <div class="textarea-container">
      <div class="html" @dblclick="onCodeBox">
        <Input
          id="code"
          :value="code.htmlCode"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 16 }"
          readonly
        ></Input>
      </div>
      <div class="form" @dblclick="onformBox">
        <Input
          id="form"
          :value="code.formCode"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 16 }"
          readonly
        ></Input>
      </div>
    </div>
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
      Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      showModel: false,
    };
  },
  methods: {
    // 复制到剪贴板
    onCodeBox() {
      var aux = document
        .getElementById("code")
        .getElementsByTagName("textarea")[0];
      aux.select();
      document.execCommand("copy");
      this.$Message.success("复制成功");
    },
    onformBox() {
      var aux = document
        .getElementById("form")
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
  .textarea-container {
    display: flex;
    flex-direction: row;
    .html {
      width: 70%;
      padding: 5px;
    }
    .form {
      width: 30%;
      padding: 5px;
    }
  }
}
</style>