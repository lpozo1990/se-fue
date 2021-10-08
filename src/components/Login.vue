<template>
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
            <label class="label" v-if="register">
            <a @click="changeType" href="#" class="label-text-alt">No tienes cuenta?</a>
          </label>
          <label class="label" v-if="!register">
            <a @click="changeType" href="#" class="label-text-alt">Entrar con mi cuenta</a>
          </label>
          <label class="label">
            <a href="#" class="label-text-alt">Olvidaste tu contraseña?</a>
          </label>
        </div> 
         <div class="form-control mt-6" v-if="!register">
          <input @click="signUp" type="button" value="Registrarse" class="btn btn-primary">
        </div>
        <div class="form-control mt-6" v-if="register">
          <input @click="logIn" type="button" value="Entrar" class="btn btn-primary">
        </div>
      </div>
    </div>
</template>

<script>
import {defineComponent, ref, watch} from 'vue'
import { handleLogin, handleOAuthLogin, handleSignup, handlePasswordReset, isLoggedIn } from '../utils/useAuth'
export default defineComponent({
    name: "Login",
    setup() {
        const email = ref("")
      const password = ref("")
      const register = ref(true)

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

      const changeType = () => {
        register.value = !register.value
      }
      
      watch(isLoggedIn, () => console.info(isLoggedIn.value))

      return {
        email,
        password,
        signUp,
        isLoggedIn,
        logIn,
        changeType,
        register
        
      }
    }

})
</script>

<style>

</style>