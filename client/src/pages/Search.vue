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

export default {
  methods: {
    ...mapActions('myData', ['loadMyData'])
  },
  mounted () {
    this.loadMyData()
  },
  computed: {
    ...mapGetters('myData', ['myData_view', 'myData'])
  }
}
</script>
