<template>
  <div class="default-props">
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
      <div class="block">
        <h3 class="title">Styles</h3>
        <div v-for="(item, index) in styles" :key="index">
          <FormItem :label="item.name">
            <Input v-model="item.value" />
          </FormItem>
        </div>
      </div>
    </Form>
  </div>
</template>

<script>
export default {
  name: "defaultProps",
  data() {
    return {};
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
};
</script>

<style lang="less">
.default-props {
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