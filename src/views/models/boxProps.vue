<template>
  <div class="box-props">
    <Form :model="props" label-position="left" :label-width="50">
      <!-- 属性 -->
      <div class="block">
        <h4 class="title">Properties</h4>
        <FormItem label="col">
          <Input
            v-model="props.col"
            placeholder="12:12"
            size="small"
            clearable
            @on-blur="onBlurCol"
          ></Input>
        </FormItem>
        <FormItem label="width">
          <Input
            v-model="props.width"
            placeholder="宽度"
            size="small"
            clearable
          ></Input>
        </FormItem>
      </div>
      <!-- 属性 -->
    </Form>
  </div>
</template>

<script>
export default {
  name: "boxprops",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      textAlignList: ["left", "center", "right"],
    };
  },
  computed: {
    props() {
      return this.$store.state.currentProps;
    },
  },
  methods: {
    onBlurCol() {
      this.props.colList = this.props.col.split(":");
      console.log(this.props.colList);
    },
  },
  watch: {},
};
</script>

<style lang="less">
.box-props {
  .block {
    padding: 8px;
    margin: 2px;
    background-color: #eeeeee;
    .title {
      color: #bebebe;
      margin-bottom: 5px;
    }
  }
}
</style>