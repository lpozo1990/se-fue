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
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label> 
          <input v-model="email" type="text" placeholder="email" class="input input-bordered">
        </div> 
        <div class="form-control">
          <label class="label">
            <span class="label-text">Contraseña</span>
          </label> 
          <input v-model="password" type="password" placeholder="password" class="input input-bordered"> 
            <label class="label">
            <a href="#" class="label-text-alt">No tienes cuenta?</a>
          </label>
          <label class="label">
            <a href="#" class="label-text-alt">Olvidaste tu contraseña?</a>
          </label>
        </div> 
         <div class="form-control mt-6">
          <input @click="signUp" type="button" value="Registrarse" class="btn btn-primary">
        </div>
        <div class="form-control mt-6">
          <input @click="logIn" type="button" value="Entrar" class="btn btn-primary">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Layout from "@/layouts/Default.vue"
import {ref, watch } from "vue"
import { handleLogin, handleOAuthLogin, handleSignup, handlePasswordReset, isLoggedIn } from '../utils/useAuth'
export default {
    components: [Layout],
    setup() {
      const email = ref("")
      const password = ref("")

      const signUp = () => {
        handleSignup({
          email: email.value,
          password: password.value
        }).then((response) => console.log(response))
      }

      const logIn = () => {
        handleLogin({
          email: email.value,
          password: password.value
        })
      }
      
      watch(isLoggedIn, () => console.info(isLoggedIn.value))

      return {
        email,
        password,
        signUp,
        isLoggedIn,
        logIn
        
      }
    }
}
</script>

<style>

</style>