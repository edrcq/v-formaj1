<template>
    <div v-if="isAllowed">
        <slot></slot>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            isAllowed: state => (state.auth.token !== '')
        })
    },
    watch: {
        isAllowed(isA) {
            console.log({ isA })
        }
    }
}
</script>