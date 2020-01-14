<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">My Data Page</div>
      </q-card-section>
      <q-card-section>
        <q-table
          :data=' myData '
          :columns=' myData_view '
          row-key="cd"
        >
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import readDataService from '../services/readDataService'

export default {
  data () {
    return {
      myData: []
    }
  },
  methods: {
    ...mapActions('myData', ['loadMyData']),
    async loadMyDataFromDb () {
      try {
        const response = await readDataService.readData()
        if (response.data) {
          this.myData = response.data
          console.log('my data from db:')
          console.log(this.myData)
        }
      } catch (error) {
        console.log(error.response.data.error)
      }
    }
  },
  mounted () {
    console.log('mounted')
    this.loadMyData()
    // this.loadMyDataFromDb()
  },
  computed: {
    ...mapGetters('myData', ['myData_view'])
    // ...mapGetters('myData', ['myData_view', 'myData'])
  }
}
</script>
