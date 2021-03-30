<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Bonjour HTitle"></hello-world>
    <div>
      <h1>{{ $t('hello_user', { username: 'Edou' }) }}</h1>
      <h1>{{ $t('hello_user_a',['Ed']) }}</h1>
      <router-link to="/r/1">Read Post 1</router-link>
      <latest-posts></latest-posts>
      <input-base v-model="text"></input-base>
      {{ text }}
      <input-search></input-search>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LatestPosts from '../components/Blog/LatestPosts.vue';
import InputBase from '../components/InputBase.vue'
import HelloWorld from '../components/HelloWorld.vue';
import InputSearch from '../components/InputSearch.vue'

export default {
  name: 'Home',
  components: {
    LatestPosts,
    InputBase,
    HelloWorld,
    InputSearch,
  },

  data() {
    return {
      text: '',
    }}

};
</script>

    LatestPosts