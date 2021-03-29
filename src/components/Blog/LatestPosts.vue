<template>
    <div>
        {{ latests }}
        <ul>
            <li
                v-for="(post, index) in latests" :key="`${index}_lpost`"
            ><router-link :to="`/r/${post.id}`">Go to {{ post.id }}</router-link></li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    // this.latests
    computed: {
        ...mapState({
            latests: state => state.posts.latests
        })
    }
}
</script>