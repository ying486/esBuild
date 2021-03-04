<template>
  <div class="switch-props">
    <Form :model="props" label-position="left" :label-width="80">
      <!-- 属性 -->
      <div class="block">
        <h4 class="title">Properties</h4>
        <FormItem label="label" :label-width="50">
          <Input
            v-model="props.labelName"
            placeholder="请输入标签名"
            size="small"
            clearable
          ></Input>
        </FormItem>
        <FormItem label="v-model">
          <Input
            v-model="props['v-model']"
            placeholder="请输入绑定的值"
            size="small"
            clearable
          ></Input>
        </FormItem>
        <FormItem label="size" :label-width="50">
          <Select v-model="props.size" size="small" style="width: 100%">
            <Option v-for="item in sizeList" :value="item" :key="item">{{
              item
            }}</Option>
          </Select>
        </FormItem>

        <FormItem label="true-color">
          <Input
            v-model="props['true-color']"
            placeholder="#2D8CF0"
            size="small"
            clearable
          />
        </FormItem>
        <FormItem label="false-color">
          <Input
            v-model="props['false-color']"
            placeholder="#CCCCCC"
            size="small"
            clearable
          />
        </FormItem>
        <Row>
          <Col span="12">
            <FormItem label="loading">
              <Checkbox v-model="props.loading" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="disabled">
              <Checkbox v-model="props.disabled" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <!-- 属性 -->
    </Form>
  </div>
</template>

<script>
export default {
  name: "switchProps",
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
  methods: {},
  watch: {},
};
</script>

<style lang="less">
.switch-props {
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