<template>
    <navbar/>
</template>

<script>
import {defineComponent, ref, watch} from 'vue'
import Navbar from "./Navbar.vue"
export default defineComponent({
    name: "Dashboard",
    components: {
        Navbar
    }

})
</script>

<style>

</style>