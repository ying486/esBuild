<template>
  <Modal
    class="preview-model"
    v-model="showModel"
    title="预览"
    width="60%"
    footer-hide
    @on-visible-change="onVisiblechange"
  >
    <div v-if="isEmpty()">暂无内容</div>
    <Form :label-width="100">
      <div v-for="(box, boxIndex) in componentList" :key="boxIndex">
        <!-- row -->
        <Row v-if="box.name === 'Row'">
          <Col
            v-for="(item, index) in box.children"
            :key="index"
            :span="box.colList[index]"
          >
            <FormItem :label="item.props.labelName">
              <g-form-item
                :obj="item"
                :boxIndex="boxIndex"
                :index="index"
              ></g-form-item>
            </FormItem>
          </Col>
        </Row>
        <!-- row -->
        <!-- column -->
        <div v-else>
          <FormItem
            v-for="(item, index) in box.children"
            :key="item.key"
            :label="item.props.labelName"
          >
            <g-form-item
              :obj="item"
              :boxIndex="boxIndex"
              :index="index"
            ></g-form-item>
          </FormItem>
        </div>
        <!-- column -->
      </div>
    </Form>
  </Modal>
</template>

<script>
import GFormItem from "../../components/gFormItem";

export default {
  name: "previewModel",
  components: { GFormItem },
  props: {
    value: {
      Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModel: false,
    };
  },
  computed: {
    componentList() {
      return this.$store.state.componentList;
    },
  },
  methods: {
    // 判断预览界面是否有组件
    isEmpty() {
      if (!this.componentList.length) {
        return true;
      }
      let flag = false;
      for (let item of this.componentList) {
        if (!item.children.length) {
          flag = true;
        } else {
          flag = false;
        }
      }
      return flag;
    },
    onVisiblechange(val) {
      this.showModel = val;
      this.$parent.showPreviewModel = val;
    },
  },
  watch: {
    value: {
      handler(show) {
        this.showModel = show;
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" >
.preview-model {
}
</style>