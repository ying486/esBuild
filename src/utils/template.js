export const templateCode = (body, form) => {
  return `<template>
  <div class="home">
    <Form label-position="right" :label-width="100">
      ${body}
    </Form>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      ${form}
    };
  },
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>
<style lang="less">
.home{
}
</style>
`
}
