<template>
    <div>
        Read Post -
        <admin-block>
          <span>We are logged IN</span>
          <admin-button-update :id="this.$route.params.id" />
        </admin-block>
        <div class="my-3"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import AdminBlock from '../../components/AdminBlock.vue';
import AdminButtonUpdate from '../../modules/admin/components/AdminButtonUpdate.vue';

export default {
  components: {
    AdminBlock,
    AdminButtonUpdate
  },
  methods: {
    ...mapActions('posts', ['getById']),
  },

  created() {
    const { id } = this.$route.params
    this.getById(id).then((r) => console.log(r)).catch((e) => console.error(e));
  },
};
</script>
