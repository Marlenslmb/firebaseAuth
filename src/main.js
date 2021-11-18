import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCwRfMqCZfpfZFUzvox9VEKJWE-pNhTkrI",
    authDomain: "authtest-98ccd.firebaseapp.com",
    projectId: "authtest-98ccd",
    storageBucket: "authtest-98ccd.appspot.com",
    messagingSenderId: "426543320125",
    appId: "1:426543320125:web:bbc8f2158dd1a7d18bee54"
  };

  firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
