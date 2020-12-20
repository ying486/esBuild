<template>
  <div class="props-pane">
    <Form :model="form" label-position="right" :label-width="60">
      <div class="block">
        <h3 class="title">Properties</h3>
        <Row>
          <Col span="12">
            <FormItem label="W:" :label-width="30">
              <InputNumber v-model="form.width" :min="0" />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="H:" :label-width="30">
              <InputNumber v-model="form.height" :min="0" />
            </FormItem>
          </Col>
        </Row>
        <FormItem label="A:" :label-width="30">
          <InputNumber v-model="form.fontSize" :min="0" />
        </FormItem>
      </div>
      <div class="block">
        <h3 class="title">Style</h3>
        <FormItem label="Color:">
          <Input v-model="form.color" />
        </FormItem>
        <FormItem label="Border:">
          <InputNumber v-model="form.border" :min="0" />
        </FormItem>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "propsPane",
  data() {
    return {
      form: {
        width: 0,
        height: 0,
        fontSize: 0,
        color: "",
        border: 0,
      },
    };
  },
};
</script>

<style lang="less">
.props-pane {
  width: 300px;
  height: 100%;
  background-color: #e0e0e0;
  .block {
    padding: 10px;
    margin: 2px;
    background-color: #eeeeee;
    .title {
      color: #bebebe;
      margin: 0 0 10px 0;
    }
  }
}
</style>