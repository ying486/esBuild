<template>
  <div class="input-props">
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
        <Row>
          <Col span="14">
            <FormItem label="type" :label-width="46">
              <Select v-model="props.type" size="small" style="width: 100px">
                <Option v-for="item in typeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="10">
            <FormItem label="size" :label-width="36">
              <Select v-model="props.size" size="small" style="width: 100%">
                <Option v-for="item in sizeList" :value="item" :key="item">{{
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
          ></Input>
        </FormItem>
        <Row>
          <Col span="13">
            <FormItem label="maxlength">
              <InputNumber
                v-model="props.maxlength"
                size="small"
                style="width: 70px"
                :min="0"
              />
            </FormItem>
          </Col>
          <Col span="11">
            <FormItem label="show-word-limit" :label-width="110">
              <Checkbox
                v-model="props['show-word-limit']"
                :disabled="showWordLimit"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="10">
            <FormItem label="rows" :label-width="40">
              <InputNumber
                v-model="props.rows"
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
                v-model="props.icon"
                placeholder="图标名称"
                size="small"
                clearable
                :disabled="!rows"
              ></Input>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="prefix" :label-width="46">
          <Input
            v-model="props.prefix"
            placeholder="图标名称"
            size="small"
            clearable
          ></Input>
        </FormItem>
        <FormItem label="suffix" :label-width="46">
          <Input
            v-model="props.suffix"
            placeholder="图标名称"
            size="small"
            clearable
          ></Input>
        </FormItem>
        <Row>
          <Col span="8">
            <FormItem label="clearable">
              <Checkbox v-model="props.clearable" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="disabled">
              <Checkbox v-model="props.disabled" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="readonly">
              <Checkbox v-model="props.readonly" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="password">
              <Checkbox v-model="props.password" :disabled="password" />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="search" :label-width="50">
              <Checkbox v-model="props.search" />
            </FormItem>
          </Col>
          <Col span="10">
            <FormItem label="enter-button" :label-width="93">
              <Checkbox
                v-model="props['enter-button']"
                :disabled="enterButton"
              />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="autosize">
              <Checkbox v-model="props.autosize" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="number">
              <Checkbox v-model="props.number" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="autofocus">
              <Checkbox v-model="props.autofocus" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <!-- 属性 -->
      <!-- 样式 -->
      <!-- <div class="block">
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
      </div> -->
      <!-- 样式 -->
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
      switch1: false,
      sizeList: ["default", "large", "small"],
      textAlignList: ["left", "center", "right"],
      showWordLimit: false, // maxlength不为null时，字数统计可用
      password: false, // type为password时，显示切换密码图标可用
      enterButton: false, // search为true时，可用
      rows: false, // type为textarea时，rows可用，icon不可用
    };
  },
  computed: {
    props() {
      return this.$store.state.currentProps;
    },
    // styles() {
    //   return this.$store.state.currentStyles;
    // },
  },
  methods: {},
  watch: {
    "props.maxlength"(val) {
      const isNumber = typeof val === "number";
      this.showWordLimit = !isNumber;
      this.props["show-word-limit"] = isNumber
        ? this.props["show-word-limit"]
        : false;
    },
    "props.type"(val) {
      const isTextarea = val === "textarea";
      this.password = !(val === "password");
      this.props.password = false;
      this.rows = !isTextarea;
      this.props.rows = isTextarea ? this.props.rows : null;
      this.props.icon = isTextarea ? "" : this.props.icon;
    },
    "props.search"(val) {
      this.enterButton = !val;
      this.props["enter-button"] = false;
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
      margin-bottom: 5px;
    }
  }
}
</style>