<template>
    <div class="h-100 w-100" @click="hideOverlay"></div>    
</template>
<script>
export default {
    methods:{
        hideOverlay:function(){    
            this.$emit("configuration-visibility", false);
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


