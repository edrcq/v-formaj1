<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AdminLayout from './layouts/AdminLayout.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

export default {
  computed: {
    layout() {
      if (this.$route.meta.layout && this.$route.meta.layout === 'AdminLayout') {
        return AdminLayout;
      }
      return DefaultLayout;
    }
  },
  created() {
    this.$store.dispatch('init')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
