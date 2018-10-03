<template>
    <div class="h-100 w-100" @click="hideOverlay"></div>    
</template>
<script>
export default {
    methods:{
        hideOverlay:function(){    
            this.$emit("select-adserver", {});
            this.$emit("configuration-visibility", false);            
            this.$emit("change-configuration-view", "adserver-content");
        }
    }
}
</script>

<style scoped>
div{
    opacity: .22;
    z-index: 3;
    position: fixed;
    background: black;
    }
</style>


