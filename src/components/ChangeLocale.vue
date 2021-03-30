<template>
    <div class="dropdown">
        <button v-for="loc in locales" :key="`loc_${loc}`" @click="changeLocale(loc)">
            {{ loc.toUpperCase() }}
        </button>
    </div>
</template>

<script>
import i18n from '../plugins/i18n'

export default {
    computed: {
        locales() {
            const keys = Object.keys(this.$i18n.messages)
            console.log({ keys })
            return keys
        }
    },

    methods: {
        changeLocale(loc) {
            i18n.locale = loc
        }
    }
}
</script>