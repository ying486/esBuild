<template>
  <div class="rate-props">
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
        <FormItem label="count">
          <InputNumber v-model="props.count" :precision="0" :min="0" />
        </FormItem>
        <FormItem label="character">
          <Input
            v-model="props.character"
            placeholder="自定义字符"
            size="small"
            clearable
          />
        </FormItem>
        <FormItem label="icon">
          <Input
            v-model="props.icon"
            placeholder="图标名称"
            size="small"
            clearable
          />
        </FormItem>
        <div class="annotation">* 优先级 character > icon</div>
        <Row>
          <Col span="12">
            <FormItem label="allow-half">
              <Checkbox v-model="props['allow-half']" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="disabled">
              <Checkbox v-model="props.disabled" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="12">
            <FormItem label="show-text">
              <Checkbox v-model="props['show-text']" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="clearable">
              <Checkbox v-model="props.clearable" />
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
  name: "rateProps",
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
.rate-props {
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