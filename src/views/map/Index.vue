<template>
    <section id="map-container"></section>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader';
const map = shallowRef(null)
// window._AMapSecurityConfig = {
//     securityJsCode:'00665bf346f25353ce099c32f1233767',
// }
AMapLoader.load({
    "key": "4f27dd8287029a022ac939e19a5afb81",              
    "plugins": []          
}).then((AMap)=>{
    map.value = new AMap.Map('map-container', {
        zoom: 10,
        viewMode: '3D',
        // mapStyle: 'amap://styles/97517da16fd09e24f146f72b8e87dfb4'
    });
}).catch(e => {
    console.log('map error', e);
})
</script>

<style lang="less" scoped>
#map-container {
    width: 100vw;
    height: 100vh;
}
</style>