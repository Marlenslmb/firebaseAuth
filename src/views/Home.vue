<template>
  <div class="home">
    <h1>Welcome, {{ name }}</h1>
    <images></images>
    <button class="logout" @click="Logout">Logout</button>
    <br>
    <Countr />
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue';
import firebase from 'firebase';
import Countr from './Countr.vue'
import Images from './Images.vue'
export default {
  components: {
    Countr,
    Images
  },
  data() {
    let name = ref("");

    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed out"))
        .catch(err => alert(err.message));
    }

    return {
      name,
      Logout
    }

  }
}
</script>

<style>
.home{
  display: flex;
  flex-direction: column;
  width: 30%;
}
.logout{
  width: 50%;
  margin: 0 auto;
}
.logout{
  margin-top: 10px;
}
</style>