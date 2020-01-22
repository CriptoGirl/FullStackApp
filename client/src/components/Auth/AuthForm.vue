import { Notify } from 'quasar'
<template>
  <q-form @submit.prevent='submitForm' ref="registerForm">
    <div class='row q-mt-md'>
      <q-input
        outlined dense clearable type='email' bottom-slots lazy-rules label="Email *"
        v-model=user.email ref='email'
        :rules="[
          val => !!val || 'Email is required',
          val => validateEmailAddress(val) || 'Invalid email address'
        ]"
      />
    </div>
    <div class='row q-mt-md'>
      <q-input
        outlined dense clearable type='password' bottom-slots lazy-rules label="Password *"
        v-model=user.password ref='password'
        :rules="[
          val => !!val || 'Password is required',
          val => val.length >= 6 || 'Password must be at least 6 characters'
        ]"
      />
    </div>
    <q-card-actions align="right" >
      <q-btn
        push color="primary" dense :ripple="{ center: true }" :label=tab type='submit'
      />
    </q-card-actions>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthForm',
  props: ['tab'],
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    validateEmailAddress (email) {
      var re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitForm () {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'Register') this.add()
        if (this.tab === 'Login') this.login()
      }
    },
    add () {
      this.registerUser(this.user).then((res) => {
        console.log('res' + res)
        // this.$q.notify({ color: 'green-4', textColor: 'white', icon: 'cloud_done', message: 'User Registered' })
      })
      // this.$q.notify({ color: 'green-4', textColor: 'white', icon: 'cloud_done', message: 'User Registered' })
    },
    login () {
      this.loginUser(this.user)
      this.$q.notify({ color: 'green-4', textColor: 'white', icon: 'cloud_done', message: 'User Logged In' })
    }
  }
}
//
// used in AuthPage.vue page
//
</script>
