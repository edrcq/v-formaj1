<template>
    <div>
        <div v-if="fetching" class="alert alert-danger">Fetching...</div>
        <post-form
            v-else
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
        },
        fetching: false,
    }},

    watch: {
        '$route.params.id': {
            immediate: true,
            handler(nid) {
                console.log({ nid })
                this.fetchPost()
            }
        }
    },

    created() {
        
    },

    methods: {
        fetchPost() {
            this.fetching = true;
            this.$store.dispatch('posts/getById', this.$route.params.id)
                .then(res => {
                    console.log({ data: res.data })
                    this.fetching = false;
                    this.post = res.data
                    
                })
        },
        handleForm({ event, post }) {
            event.preventDefault();
            this.$store.dispatch('posts/update', post)
        }
    }
}
</script>