<template>
    <div>
        <post-form
            @submit="handleForm"
            btnSubmitText="Update it"
            :postData="post"
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

    data() { return {
        post: {
            title: '',
            body: '',
            author: '',
        }
    }},

    created() {
        this.$store.dispatch('posts/getById', this.$route.params.id)
            .then(res => {
                console.log({ data: res.data })
                this.post = res.data
            })
    },

    methods: {
        handleForm({ event, post }) {
            event.preventDefault();
            this.$store.dispatch('posts/update', post)
        }
    }
}
</script>