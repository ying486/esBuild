<template>
  <div class="cascader-props">
    <Form :model="props" label-position="left" :label-width="70">
      <!-- 属性 -->
      <div class="block">
        <h4 class="title">Properties</h4>
        <FormItem label="label" :label-width="40">
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
        <Row>
          <Col span="12">
            <FormItem label="size" :label-width="40">
              <Select v-model="props.size" size="small" style="width: 90%">
                <Option v-for="item in sizeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="trigger" :label-width="50">
              <Select v-model="props.trigger" size="small" style="width: 90%">
                <Option v-for="item in triggerList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="placeholder" :label-width="80">
          <Input
            v-model="props.placeholder"
            placeholder="占位文本"
            size="small"
            clearable
          />
        </FormItem>
        <FormItem label="not-found-text" :label-width="100">
          <Input
            v-model="props['not-found-text']"
            size="small"
            clearable
            placeholder="列表为空时显示的内容"
          />
        </FormItem>
        <Row>
          <Col span="8">
            <FormItem label="filterable" :label-width="65">
              <Checkbox v-model="props.filterable" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="disabled" :label-width="65">
              <Checkbox v-model="props.disabled" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="clearable" :label-width="65">
              <Checkbox v-model="props.clearable" />
            </FormItem>
          </Col>
        </Row>
        <FormItem label="change-on-select" :label-width="120">
          <Checkbox v-model="props['change-on-select']" />
        </FormItem>
      </div>
      <!-- 属性 -->
    </Form>
  </div>
</template>

<script>
export default {
  name: "cascaderProps",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      triggerList: ["click", "hover"],
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
.cascader-props {
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