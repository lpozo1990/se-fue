import { ref } from 'vue'
import { supabase } from '../utils/supabase'
import { Session, Provider } from '@supabase/gotrue-js/dist/main/lib/types'


const userSession = ref<Session | null>(null)

const isLoggedIn = ref(false)

/*
 * Handles user login via email + password into a supabase session.
 * If not password is empty, it will send a magic link to the users email address.
 */
async function handleLogin(credentials: Credentials) {
  try {
    const { error, user } = await supabase.auth.signIn({
      email: credentials.email,
      password: credentials.password,
      
    })
    if (error) {
      return error
    }
    // No error throw, but no user detected so send magic link
    if (!error && !user) {
      console.log('Check your email for the login link!')
    }
    isLoggedIn.value = true
    return user
  } catch (error) {
    console.error('Error thrown:', error.message)
    console.log(error.error_description || error)
  }
}

/*
 * Handles signup provided a valid credentials object.
 */
async function handleSignup(credentials: Credentials) {
  try {
    const { email, password } = credentials
    // prompt user if they have not filled populated their credentials
    if (!email || !password) {
      return
    }
    const { user, session,  error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.error(error, error.message)
      return 
    }
    return user
  } catch (err) {
    console.error('signup error', err)
  }
}

/**
 * Handles signup via Third Pary Login.
 * https://supabase.io/docs/guides/auth#third-party-logins
 */
async function handleOAuthLogin(provider: Provider) {
  const { error } = await supabase.auth.signIn({ provider })
  if (error) console.error('Error: ', error.message)
}

/**
 * Handles password reset. Will send an email to the given email address.
 */
async function handlePasswordReset() {
  const email = prompt('Please enter your email:')
  if (!email) {
  } else {
    const { error } = await supabase.auth.api.resetPasswordForEmail(email)
    if (error) {
    } else {
    }
  }
}

async function handleUpdateUser(credentials: Credentials) {
  try {
    const { error } = await supabase.auth.update(credentials)
    if (error) {
    } else {
      window.location.href = '/'
    }
  } catch (error) {
  }
}

/**
 * Handles logging a user out of a superbase session
 */
async function handleLogout() {
  console.log('logging out')
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Error', error)
      return
    }
    return true
  } catch (err) {
    console.error('Error', err)
  }
}

export {
  userSession,
  handleLogin,
  handleOAuthLogin,
  handleSignup,
  handleLogout,
  handlePasswordReset,
  handleUpdateUser,
  isLoggedIn
}