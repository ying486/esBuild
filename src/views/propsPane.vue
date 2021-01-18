<template>
  <div class="props-pane">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "propsPane",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
.props-pane {
  width: 300px;
  height: 100%;
  background-color: #e0e0e0;
}
</style>