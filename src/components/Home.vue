<template>
  <div class="hero min-h-screen bg-base-200 text-white">
  <div class="flex-col justify-center hero-content lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="mb-5 text-5xl font-bold text-white">
           Se fue!
          </h1> 
      <p class="mb-5 text-white">
            La herramienta para estadistica de cortes electricos, a lo poweroutage.us Cubano :D
          </p>
    </div> 
    <Login />
    
  </div>
</div>
</template>

<script>
import Login from '../components/Login'

export default {
    components: {Layout, Login},
    setup() {
    }
}
</script>

<style>

</style>