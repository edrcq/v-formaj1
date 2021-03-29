<template>
    <div>
        Read Post
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('posts', ['getById']),
  },

  created() {
    const { id } = this.$route.params
    this.getById(id).then((r) => console.log(r)).catch((e) => console.error(e));
  },
};
</script>
