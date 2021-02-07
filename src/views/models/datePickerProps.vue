<template>
  <div class="input-number-props">
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
        <FormItem label="size" :label-width="40">
          <Select v-model="props.size" size="small" style="width: 100%">
            <Option v-for="item in sizeList" :value="item" :key="item">{{
              item
            }}</Option>
          </Select>
        </FormItem>
        <FormItem label="type" :label-width="40">
          <Select v-model="props.type" size="small" style="width: 100%">
            <Option v-for="item in typeList" :value="item" :key="item">{{
              item
            }}</Option>
          </Select>
        </FormItem>
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
        <FormItem label="start-date" :label-width="72">
          <DatePicker
            type="date"
            size="small"
            placement="bottom-end"
            placeholder="选择开始日期"
          ></DatePicker>
        </FormItem>
        <Row>
          <Col span="14">
            <FormItem label="separator">
              <Input
                v-model="props.separator"
                size="small"
                clearable
                style="width: 90%"
                placeholder="分隔符"
              />
            </FormItem>
          </Col>
          <Col span="8">
            <Tooltip
              placement="left"
              max-width="200"
              :delay="500"
              :content="splitPanelsTip"
            >
              <FormItem label="split-panels" :label-width="88">
                <Checkbox
                  v-model="props['split-panels']"
                  :disabled="splitPanels"
                />
              </FormItem>
            </Tooltip>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="multiple" :label-width="60">
              <Checkbox v-model="props.multiple" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="confirm" :label-width="64">
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
            <FormItem label="clearable" :label-width="60">
              <Checkbox v-model="props.clearable" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="readonly" :label-width="64">
              <Checkbox v-model="props.readonly" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="editable" :label-width="65">
              <Checkbox v-model="props.editable" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="16">
            <FormItem label="show-week-numbers" :label-width="150">
              <Checkbox v-model="props['show-week-numbers']" />
            </FormItem>
          </Col>
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
  name: "inputNumberProps",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      typeList: [
        "date",
        "daterange",
        "datetime",
        "datetimerange",
        "year",
        "month",
      ],
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
      splitPanelsTip: "仅在 daterange 和 datetimerange 下可用。",
      captureTip:
        "capture 是浏览器的一种默认行为，如果开启，当可下拉的组件（例如 Select）处于展开状态时，点击外部操作不会立即响应，而是先收起下拉菜单，再次点击才会响应操作。",
      splitPanels: false,
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
      const temp = !["daterange", "datetimerange"].includes(val);
      this.splitPanels = temp;
      temp && (this.props["split-panels"] = false);
    },
  },
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