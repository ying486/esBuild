<template>
  <div class="props-pane">
    <div class="group">
      <h3 class="title">Text</h3>
      <div>W:</div>
      <div>H:</div>
    </div>
    <div class="group">
      <h3 class="title">Style</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "propsPane",
};
</script>

<style lang="less">
.props-pane {
  width: 300px;
  height: 100%;
  background-color: #eeeeee;
  padding: 10px;
  > div:nth-child(n) {
    margin-bottom: 10px;
    border-bottom: 1px solid #c1c1c1;
  }
  > div:last-of-type {
    margin-bottom: 10px;
    // border-bottom: 1px solid #c1c1c1;
  }
}
</style>