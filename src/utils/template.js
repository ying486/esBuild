export const templateCode = (body, form) => {
  return `<template>
  <div class="home">
    ${body}
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      form:${form} 
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
