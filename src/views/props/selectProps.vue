<template>
  <div class="select-props">
    <Form
      v-if="Object.keys(props).length && props.group"
      :model="props"
      label-position="left"
      :label-width="70"
    >
      <!-- 主属性 -->
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
            v-model="props.group['v-model']"
            placeholder="请输入绑定的值"
            size="small"
            clearable
          ></Input>
        </FormItem>
        <FormItem label="size" :label-width="30">
          <Select v-model="props.group.size" size="small" style="width: 90%">
            <Option v-for="item in sizeList" :value="item" :key="item">{{
              item
            }}</Option>
          </Select>
        </FormItem>
        <FormItem label="prefix" :label-width="40">
          <Input
            v-model="props.group.prefix"
            placeholder="在 Select 内显示图标"
            size="small"
            clearable
            style="width: 90%"
          />
        </FormItem>
        <FormItem label="placeholder" :label-width="80">
          <Input
            v-model="props.group.placeholder"
            placeholder="占位文本"
            size="small"
            clearable
          />
        </FormItem>
        <FormItem label="not-found-text" :label-width="100">
          <Input
            v-model="props.group['not-found-text']"
            placeholder="无匹配数据时提示文字"
            size="small"
            clearable
          />
        </FormItem>
        <Row>
          <Col span="14">
            <Tooltip
              placement="left"
              max-width="200"
              :delay="500"
              content="为空时，默认不做数量限制"
            >
              <FormItem label="max-tag-count" :label-width="102">
                <InputNumber
                  v-model="props.group['max-tag-count']"
                  size="small"
                  style="width: 90%"
                  :min="0"
                  :disabled="multipleFlag"
                />
              </FormItem>
            </Tooltip>
          </Col>
          <Col span="10">
            <FormItem label="label-in-value" :label-width="100">
              <Checkbox v-model="props.group['label-in-value']" /> </FormItem
          ></Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="multiple" :label-width="60">
              <Checkbox v-model="props.group.multiple" />
            </FormItem>
          </Col>
          <Col span="16">
            <FormItem label="placement">
              <Select v-model="props.group.placement" size="small">
                <Option
                  v-for="item in placementList"
                  :value="item"
                  :key="item"
                  >{{ item }}</Option
                >
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span="8">
            <FormItem label="filterable" :label-width="60">
              <Checkbox v-model="props.group.filterable" /> </FormItem
          ></Col>
          <Col span="8">
            <FormItem label="disabled" :label-width="64">
              <Checkbox v-model="props.group.disabled" />
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="clearable" :label-width="65">
              <Checkbox v-model="props.group.clearable" />
            </FormItem>
          </Col>
        </Row>
      </div>
      <!-- 主属性 -->
      <!-- 子属性 -->
      <div class="block">
        <h4 class="title">Child Properties</h4>
        <Collapse v-model="select" accordion>
          <Panel
            v-for="(item, index) in props.child"
            :key="index"
            :name="String(index)"
          >
            option {{ index + 1 }}
            <Button
              class="remove-btn"
              size="small"
              @click.stop="onRemoveOption(index)"
              ><Icon type="md-remove"
            /></Button>
            <div slot="content">
              <FormItem
                label="value"
                :label-width="50"
                :style="'align-item: center'"
              >
                <Input
                  v-model="props.child[index].value"
                  size="small"
                  :style="'margin-right: 3px'"
                >
                </Input>
              </FormItem>
              <FormItem
                label="label"
                :label-width="50"
                :style="'align-item: center'"
              >
                <Input
                  v-model="props.child[index].label"
                  size="small"
                  :style="'margin-right: 3px'"
                >
                </Input>
              </FormItem>
              <Row>
                <Col span="12">
                  <FormItem label="disabled">
                    <Checkbox v-model="props.child[index].disabled" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <!-- <FormItem label="tag">
                    <Input v-model="props.child[index].tag" size="small">
                    </Input>
                  </FormItem> -->
                </Col>
              </Row>
            </div>
          </Panel>
        </Collapse>
        <Button size="small" long @click="onAddOption"
          ><Icon type="md-add"
        /></Button>
      </div>
      <!-- 子属性 -->
    </Form>
  </div>
</template>

<script>
export default {
  name: "selectProps",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      textAlignList: ["left", "center", "right"],
      placementList: [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ],
      select: "0",
      multipleFlag: false,
    };
  },
  computed: {
    props() {
      return this.$store.state.currentProps;
    },
  },
  methods: {
    // 添加选项
    onAddOption() {
      this.props.child.push({
        value: `label ${this.props.child.length + 1}`,
        label: `label ${this.props.child.length + 1}`,
        disabled: false,
        // tag: null,
      });
      setTimeout(() => {
        this.select = `${this.props.child.length - 1}`;
      }, 400);
    },
    // 移除选项
    onRemoveOption(index) {
      this.props.child.splice(index, 1);
    },
  },
  watch: {
    "props.group.multiple"(val) {
      console.log(this.props.group["max-tag-count"], "count");
      this.multipleFlag = !val;
      this.props.group["max-tag-count"] = val
        ? this.props.group["max-tag-count"]
        : null;
    },
  },
};
</script>

<style lang="less">
.select-props {
  .block {
    padding: 8px;
    margin: 2px;
    background-color: #eeeeee;
    .title {
      color: #bebebe;
      margin-bottom: 5px;
    }
    .remove-btn {
      margin-left: 140px;
    }
  }
}
</style>