<template>
    <div>
        <post-form
            @submit="handleForm"
            btnSubmitText="Add a post"
        >
        </post-form>
    </div>
</template>

<script>
import PostForm from '../components/PostForm.vue'

export default {
    components: {
        PostForm,
    },

    methods: {
        handleForm({ event, post }) {
            event.preventDefault();
            this.$store.dispatch('posts/addPost', post)
        }
    }
}
</script>