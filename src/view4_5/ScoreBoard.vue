<template>
  <div class="col-8 mx-auto">
    <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
    <ExitToGameRoom />
  </div>
</template>

<script>
import ExitToGameRoom from '@/view4_5/ExitToGameRoom.vue'
  export default {
    name:'ScoreBoard',
    components:{
      ExitToGameRoom
    },
    data() {
      return {
        fields: ['name', 'score'],
        items: [
          { name: 'Dickerson', score: 10 , status: 'awesome' },
          { name: 'Larsen', score: 8 },
          { name: 'Geneva', score: 4 }
        ]
      }
    },
    methods: {
      rowClass(item, type) {
        if (!item) return
        if (item.status === 'awesome') return 'table-success'
      }
    }
  }
</script>