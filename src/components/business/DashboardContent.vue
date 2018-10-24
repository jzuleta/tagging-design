<template>
    <div class="bg-white element-shadow" :style="'height:' + (windowSize.height - windowSize.mainContentReference) + 'px'">
        <h4 class="font-weight-light pb-8 pt-18 pl-18 m-0">Tags Creation</h4>
    </div>
</template>
<script>
export default {
  props: ["windowSize"]
};
</script>
