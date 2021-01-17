<template>
  <div class="props-pane">
    <Form :model="options" label-position="right">
      <div class="block">
        <h3 class="title">Properties</h3>
        <div v-for="(item, index) in Object.keys(options)" :key="index">
          <FormItem v-if="typeof options[item] === 'string'" :label="item">
            <Input v-model="options[item]" />
          </FormItem>
          <FormItem v-if="typeof options[item] === 'boolean'" :label="item">
            <Checkbox v-model="options[item]" />
          </FormItem>
          <FormItem v-if="typeof options[item] === 'number'" :label="item">
            <InputNumber v-model="options[item]" :min="0" />
          </FormItem>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "propsPane",
  data() {
    return {};
  },
  computed: {
    options: {
      get() {
        return this.$store.state.currentOpts;
      },
    },
  },
  methods: {},
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