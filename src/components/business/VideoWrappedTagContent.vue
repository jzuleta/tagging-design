<template>
    <div class="bg-white element-shadow px-8 py-8" :style="'height:' + (windowSize.height - windowSize.tagContentReference) + 'px'">
        <h4 class="font-weight-light pb-8 pt-18 pl-18 m-0">Video Wrapped Tags</h4>
        <p class="font-color-light pl-18 m-0">
        If additional parameters are required, (i.e. “no block” or “disable flash”) select ‘Edit’
        </p>
         <div class="px-18">
            <table class="w-100 mt-18">
                <thead>
                    <tr>
                        <th></th>
                        <th class="font-weight-strong font-size-large font-color-light">Ad Server</th>
                        <th class="font-weight-strong font-size-large font-color-light">File Uploaded</th>
                        <th class="font-weight-strong font-size-large font-color-light">Configuration</th>
                        <th class="font-weight-strong font-size-large font-color-light">Media Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>   
    </div>
</template>
<script>
export default {
  props: ["windowSize"]
};
</script>
