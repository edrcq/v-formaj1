<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <router-link to="/r/1">Read Post 1</router-link>
      <latest-posts></latest-posts>
      <input-base v-model="text"></input-base>
      {{ text }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LatestPosts from '../components/Blog/LatestPosts.vue';
import InputBase from '../components/InputBase.vue'

export default {
  name: 'Home',
  components: {
    LatestPosts,
    InputBase
  },

  data() { return {
    text: '',
  }}

};
</script>

    LatestPosts