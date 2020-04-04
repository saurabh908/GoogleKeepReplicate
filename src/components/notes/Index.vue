<!--<template>
  <ol>
    <li v-for="note in notes" :key="note.title">
      <pre>
        {{note}}
      </pre>
    </li>
  </ol>
</template>
-->

<template>
  <div class="notes">
      <note v-for="note in notes" :note="note" :key="note.title">
      </note>
  </div>
</template>


<script>
// add js here
//import {firestorePlugin} from 'vuefire'
 import Firebase from 'firebase'
 import { db } from '../../../fireBaseDB' 
 import VueFirestore from 'vue-firestore';
import Vue from 'vue';
import Note from './Note'
// Vue.use(firestorePlugin)
Vue.config.productionTip = false;

Vue.use(VueFirestore);

export default {
    components: {
      Note
    },
  data () {
    return {
      notes: []
    }
  },
  firestore(){
      return {
          notes: db.collection('notes')
      }
  }
//   ready () {
//     let firebase = new Firebase('https://gkeepfirebase.firebaseio.com/')
//     firebase.child('notes').on('child_added', (snapshot) => {
//       let note = snapshot.val()
//       this.notes.unshift(note)
//     })
//   }
}
</script>
<style>
/* add css here */
 .notes{
    padding: 0 100px;
  }
</style>

