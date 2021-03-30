<template>
    <div class="row">
        <div class="col">
            <textarea v-debounce="handleText" cols="50" rows="14" :value="value"></textarea>
        </div>
        <div class="col">
            <div v-html="htmly"></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked'

export default {
    props: {
        value: { type: String, default: '' },
    },

    computed: {
        htmly() {
            return marked(this.value)
        },
    },

    methods: {
        handleText(text) {
            this.$emit('input', text)
        },
    }
}
</script>