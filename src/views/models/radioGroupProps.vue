<template>
  <div class="radio-group-props">
    <Form
      v-if="Object.keys(props).length && props.group"
      :model="props"
      label-position="right"
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
          <Col span="12">
            <FormItem label="size" :label-width="50">
              <Select
                v-model="props.group.size"
                size="small"
                style="width: 100%"
              >
                <Option v-for="item in sizeList" :value="item" :key="item">{{
                  item
                }}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="vertical">
              <Checkbox v-model="props.group.vertical" />
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
                label="label"
                :label-width="70"
                :style="'align-item: center'"
              >
                <Input
                  v-model="props.child[index].label"
                  size="small"
                  :style="'width: 84%; margin-right: 3px'"
                >
                </Input>
              </FormItem>
              <FormItem label="size" :label-width="50">
                <Select
                  v-model="props.child[index].size"
                  size="small"
                  style="width: 100%"
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
                  <FormItem label="border">
                    <Checkbox v-model="props.child[index].border" />
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
  name: "radioGroupProps",
  data() {
    return {
      sizeList: ["default", "large", "small"],
      textAlignList: ["left", "center", "right"],
      select: "0",
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
  methods: {
    // 添加选项
    onAddOption() {
      this.props.child.push({
        label: "default",
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
  watch: {},
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