<template>
    <div class="dropdown">
        <button v-for="loc in locales" :key="`loc_${loc}`" @click="setLocale(loc)">
            {{ loc.toUpperCase() }}
        </button>
    </div>
</template>

<script>
import { setLocale } from '../plugins/i18n'

export default {
    computed: {
        locales() {
            const keys = Object.keys(this.$i18n.messages)
            console.log({ keys })
            return keys
        }
    },

    methods: {
        setLocale,
    }
}
</script>