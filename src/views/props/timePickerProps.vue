<template>
  <div class="time-picker-props">
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
            <FormItem label="type" :label-width="40">
              <Select v-model="props.type" size="small" style="width: 100%">
                <Option v-for="item in typeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="format" :label-width="50">
          <Input
            v-model="props.format"
            placeholder="yyyy:MM:dd hh:mm:ss"
            size="small"
            clearable
          />
        </FormItem>
        <FormItem label="placement">
          <Select v-model="props.placement" size="small" style="width: 100%">
            <Option v-for="item in placementList" :value="item" :key="item">{{
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
        <FormItem label="separator">
          <Input
            v-model="props.separator"
            size="small"
            clearable
            placeholder="分隔符"
            :disabled="typeFlag"
          />
        </FormItem>
        <Row>
          <Col span="8">
            <Tooltip
              placement="left"
              max-width="200"
              :delay="500"
              :content="captureTip"
            >
              <FormItem label="capture" :label-width="65">
                <Checkbox v-model="props.capture" />
              </FormItem>
            </Tooltip>
          </Col>
          <Col span="8">
            <FormItem label="confirm" :label-width="65">
              <Checkbox v-model="props.confirm" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="disabled" :label-width="65">
              <Checkbox v-model="props.disabled" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="clearable" :label-width="65">
              <Checkbox v-model="props.clearable" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="readonly" :label-width="65">
              <Checkbox v-model="props.readonly" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="editable" :label-width="65">
              <Checkbox v-model="props.editable" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <!-- 属性 -->
      <!-- 样式 -->
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
      <!-- 样式 -->
    </Form>
  </div>
</template>

<script>
export default {
  name: "timePickerProps",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      typeList: ["time", "timerange"],
      placementList: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "right",
        "right-start",
        "right-end",
      ],
      textAlignList: ["left", "center", "right"],
      captureTip:
        "capture 是浏览器的一种默认行为，如果开启，当可下拉的组件（例如 Select）处于展开状态时，点击外部操作不会立即响应，而是先收起下拉菜单，再次点击才会响应操作。",
      typeFlag: false,
    };
  },
  computed: {
    props() {
      return this.$store.state.currentProps;
    },
    styles() {
      return this.$store.state.currentStyles;
    },
  },
  methods: {},
  watch: {
    "props.type"(val) {
      this.typeFlag = !["TimePicker"].includes(val);
    },
  },
};
</script>

<style lang="less">
.time-picker-props {
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