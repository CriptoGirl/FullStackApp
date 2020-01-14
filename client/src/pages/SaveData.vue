<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Save Data Page</div>
      </q-card-section>
      <q-card-section>
        <q-card>
          <q-form @submit.prevent.stop='submitForm' >
            <q-card-section>
              <q-input outlined dense required class='q-ma-sm' label="Code"
                type='text' maxlength="4" v-model='myDataItem.code'/>
              <q-input outlined dense required class='q-ma-sm' label="Name"
                type='text' maxlength="24" v-model='myDataItem.name'/>
              <q-input outlined dense required class='q-ma-sm' label="Description"
                type='text' v-model='myDataItem.description' />
              <q-input outlined dense required class='q-ma-sm' label="Status"
                type='text' maxlength="12" v-model='myDataItem.status' />
            </q-card-section>
            <q-card-actions align="right">
              <q-btn color="primary" dense label="Save" type='submit' class='q-mb-sm'/>
            </q-card-actions>
          </q-form >
        </q-card>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
import saveDataService from '../services/saveDataService'
export default {
  name: 'SaveDataPage',
  data () {
    return {
      myDataItem: {
        code: '',
        name: '',
        description: '',
        status: 'Current'
      }
      // myObject: {}
    }
  },
  methods: {
    ...mapActions('myData', ['addMyDataItem']),

    // submitForm () {
    //   console.log('submit form')
    // //   this.myObject = Object.assign({}, this.myObject, { code: '111', name: 'name', description: 'xxx', status: 'status' })
    // //   this.addMyDataItem(this.myObject)
    //   this.addMyDataItem(this.myDataItem)
    // }

    async submitForm () {
      try {
        const response = await saveDataService.saveData(this.myDataItem)
        console.log(response.data)
        if (response.data) {
          this.addMyDataItem(this.myDataItem)
          console.log('Data added')
        }
      } catch (error) {
        const errorMessage = error.response.data.error
        console.log(errorMessage)
      }
    }

  }
}
</script>
