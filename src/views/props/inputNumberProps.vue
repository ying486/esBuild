<template>
  <div class="input-number-props">
    <Form :model="props" label-position="left" :label-width="70">
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
        <FormItem label="size" :label-width="40">
          <Select v-model="props.size" size="small" style="width: 100%">
            <Option v-for="item in sizeList" :value="item" :key="item">{{
              item
            }}</Option>
          </Select>
        </FormItem>
        <FormItem label="placeholder" :label-width="80">
          <Input
            v-model="props.placeholder"
            placeholder="占位文本"
            size="small"
            clearable
          />
        </FormItem>
        <Row>
          <Col span="13">
            <FormItem label="max" :label-width="40">
              <InputNumber v-model="props.max" />
            </FormItem>
          </Col>
          <Col span="11">
            <FormItem label="min" :label-width="46">
              <InputNumber v-model="props.min" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="11">
            <FormItem label="step" :label-width="40">
              <InputNumber v-model="props.step" :min="0" />
            </FormItem>
          </Col>
          <Col span="13">
            <FormItem label="precision">
              <InputNumber v-model="props.precision" :precision="0" :min="0" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="editable" :label-width="60">
              <Checkbox v-model="props.editable" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="disabled" :label-width="64">
              <Checkbox v-model="props.disabled" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="readonly" :label-width="65">
              <Checkbox v-model="props.readonly" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="13">
            <FormItem label="controls-outside" :label-width="112">
              <Checkbox v-model="props['controls-outside']" />
            </FormItem>
          </Col>
          <Col span="11">
            <FormItem label="active-change" :label-width="100">
              <Checkbox v-model="props['active-change']" />
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
  name: "inputNumberProps",
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
.input-number-props {
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