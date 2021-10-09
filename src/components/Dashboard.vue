<template>
    <navbar/>
    <div class="flex bg-">

    
    <map-section/>
    <panel/>
    </div>
</template>

<script>
import {defineComponent, onBeforeMount, ref, watch} from 'vue'
import Navbar from "./Navbar.vue"
import MapSection from './Map.vue'
import Panel from './Panel.vue'


export default defineComponent({
    name: "Dashboard",
    components: {
        Navbar, MapSection, Panel
    },
   
})
</script>

<style>

</style>