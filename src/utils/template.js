export const templateCode = (body) => {
  return `
<template>
  <div class="home">
  ${body}
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>
<style lang="less">
.home{
  .rowClass {
    display: flex;
    flex-direction: row;
  }
  .columnClass {
    display: flex;
    flex-direction: column;
  }
}
</style>
`
}
