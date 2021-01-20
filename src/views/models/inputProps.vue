<template>
  <div class="input-props">
    <Form :model="options" label-position="right" :label-width="70">
      <div class="block">
        <h4 class="title">Properties</h4>
        <FormItem label="label" :label-width="50">
          <Input
            v-model="options.label"
            placeholder="请输入标签名"
            size="small"
          ></Input>
        </FormItem>
        <FormItem label="v-model">
          <Input
            v-model="options['v-model']"
            placeholder="请输入绑定的值"
            size="small"
          ></Input>
        </FormItem>
        <Row>
          <Col span="12">
            <FormItem label="type" :label-width="46">
              <Select v-model="options.type" size="small" style="width: 100px">
                <Option v-for="item in typeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="size" :label-width="50">
              <Select v-model="options.size" size="small" style="width: 100%">
                <Option v-for="item in sizeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="placeholder" :label-width="80">
          <Input
            v-model="options.placeholder"
            placeholder="占位文本"
            size="small"
          ></Input>
        </FormItem>
        <Row>
          <Col span="12">
            <FormItem label="maxlength">
              <InputNumber
                v-model="options.maxlength"
                size="small"
                style="width: 70px"
                :min="0"
              />
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="show-word-limit" :label-width="116">
              <Checkbox
                v-model="options['show-word-limit']"
                :disabled="showWordLimit"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="10">
            <FormItem label="rows" :label-width="40">
              <InputNumber
                v-model="options.rows"
                size="small"
                style="width: 70px"
                :min="1"
                :disabled="rows"
              />
            </FormItem>
          </Col>
          <Col span="14">
            <FormItem label="icon" :label-width="40">
              <Input
                v-model="options.icon"
                placeholder="图标名称"
                size="small"
                :disabled="!rows"
              ></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="prefix" :label-width="46">
          <Input
            v-model="options.prefix"
            placeholder="图标名称"
            size="small"
          ></Input>
        </FormItem>
        <FormItem label="suffix" :label-width="46">
          <Input
            v-model="options.suffix"
            placeholder="图标名称"
            size="small"
          ></Input>
        </FormItem>
        <Row>
          <Col span="8">
            <FormItem label="clearable">
              <Checkbox v-model="options.clearable" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="disabled">
              <Checkbox v-model="options.disabled" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="readonly">
              <Checkbox v-model="options.readonly" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="password">
              <Checkbox v-model="options.password" :disabled="password" />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="search" :label-width="50">
              <Checkbox v-model="options.search" />
            </FormItem>
          </Col>
          <Col span="10">
            <FormItem label="enter-button" :label-width="93">
              <Checkbox
                v-model="options['enter-button']"
                :disabled="enterButton"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="autosize">
              <Checkbox v-model="options.autosize" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="number">
              <Checkbox v-model="options.number" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="autofocus">
              <Checkbox v-model="options.autofocus" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <div class="block">
        <h4 class="title">Styles</h4>
        <div v-for="(item, index) in styles" :key="index">
          <FormItem :label="item.name">
            <Select v-model="item.value" size="small">
              <Option v-for="item in textAlignList" :value="item" :key="item">{{
                item
              }}</Option>
            </Select>
          </FormItem>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "inputProps",
  data() {
    return {
      typeList: [
        "text",
        "password",
        "textarea",
        "url",
        "email",
        "date",
        "number",
        "tel",
      ],
      sizeList: ["default", "large", "small"],
      textAlignList: ["left", "center", "right"],
      showWordLimit: false, // maxlength不为null时，字数统计可用
      password: false, // type为password时，显示切换密码图标可用
      enterButton: false, // search为true时，可用
      rows: false, // type为textarea时，rows可用，icon不可用
    };
  },
  computed: {
    options() {
      return this.$store.state.currentOpts;
    },
    styles() {
      return this.$store.state.currentStyles;
    },
  },
  methods: {},
  watch: {
    "options.maxlength"(val) {
      const isNumber = typeof val === "number";
      this.showWordLimit = !isNumber;
      this.options["show-word-limit"] = isNumber;
    },
    "options.type"(val) {
      const isTextarea = val === "textarea";
      this.password = !(val === "password");
      this.options.password = false;
      this.rows = !isTextarea;
      this.options.rows = isTextarea ? this.options.rows : null;
      this.options.icon = isTextarea ? "" : this.options.icon;
    },
    "options.search"(val) {
      this.enterButton = !val;
      this.options["enter-button"] = false;
    },
  },
};
</script>

<style lang="less">
.input-props {
  .block {
    padding: 8px;
    margin: 2px;
    background-color: #eeeeee;
    .title {
      color: #bebebe;
    }
  }
}
</style>