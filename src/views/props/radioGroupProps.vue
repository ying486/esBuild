<template>
  <div class="radio-group-props">
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
        <Row>
          <Col span="11">
            <FormItem label="size" :label-width="40">
              <Select
                v-model="props.group.size"
                size="small"
                style="width: 90%"
              >
                <Option v-for="item in sizeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="type" :label-width="40">
              <Checkbox
                v-model="props.group.type"
                true-value="button"
                :false-value="null"
              />
            </FormItem>
          </Col>
          <Col span="6">
            <FormItem label="vertical" :label-width="60">
              <Checkbox v-model="props.group.vertical" :disabled="typeFlag" />
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
              <FormItem label="label" :label-width="50">
                <Input v-model="props.child[index].label" size="small"> </Input>
              </FormItem>
              <FormItem label="size" :label-width="50">
                <Select
                  v-model="props.child[index].size"
                  size="small"
                  style="width: 100%"
                  :disabled="typeFlag"
                >
                  <Option v-for="item in sizeList" :value="item" :key="item">{{
                    item
                  }}</Option>
                </Select>
              </FormItem>
              <Row>
                <Col span="12">
                  <FormItem label="disabled">
                    <Checkbox v-model="props.child[index].disabled" />
                  </FormItem>
                </Col>
                <Col span="12">
                  <FormItem label="border" :label-width="60">
                    <Checkbox
                      v-model="props.child[index].border"
                      :disabled="typeFlag"
                    />
                  </FormItem>
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
  name: "radioGroupProps",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      textAlignList: ["left", "center", "right"],
      select: "0",
      typeFlag: false,
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
        label: `label ${this.props.child.length + 1}`,
        size: "default",
        disabled: false,
        border: false,
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
    "props.group.type"(val) {
      this.typeFlag = val === "button";
    },
  },
};
</script>

<style lang="less">
.radio-group-props {
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