// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import Firebase from 'firebase'

Vue.config.productionTip = false

// let firebase = new Firebase('https://gkeepfirebase.firebaseapp.com/')

// firebase.child('notes').set([
//   {title: 'Hello world', content: 'Lorem ipsum'}
// ])

// firebase.child('notes').on('value', (snapshot) => {
//   let notes = snapshot.val()
//   console.log(notes)
//   window.alert(notes[0].title)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
