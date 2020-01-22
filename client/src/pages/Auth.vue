<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{tab}} Page</div>
      </q-card-section>
      <q-card-section>
        <q-card>
          <q-tabs v-model="tab"
            align="justify" dense narrow-indicator
            class="q-mb-sm text-grey" active-color="primary"
          >
            <q-tab name="Login" label="Login" />
            <q-tab name="Register" label="Register" />
          </q-tabs>
          <q-tab-panel name="Login" v-if=" tab=='Login' ">
            <my-auth-form :tab=tab />
          </q-tab-panel>
          <q-tab-panel name="Register" v-if=" tab=='Register' ">
            <my-auth-form :tab=tab />
          </q-tab-panel>
        </q-card>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'AuthPage',
  data () {
    return {
      tab: 'Login'
    }
  },
  components: {
    'my-auth-form': require('components/Auth/AuthForm.vue').default
  }
}
</script>
