<template>
    <div class="configuration-section">
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: ["windowSize"]
};
</script>

<style scoped>
.configuration-section {
  width: 400px;
  position: fixed;
  height: 100%;
  background-color: white;
  z-index: 3;
  right: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
}
</style>