<template>      
  <div class="bg-white element-shadow" :style="'height:' + (windowSize.height - windowSize.heightReference) + 'px'">Macro</div>      
</template>
<script>
export default {
  props: ["windowSize"]
};
</script>
