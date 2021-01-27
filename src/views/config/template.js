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
</style>
`
}
