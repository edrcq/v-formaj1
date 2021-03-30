<template>
    <div>
        <input v-model="searchInput" type="text" placeholder="Search anything" />
    </div>
</template>

<script>


export default {
    data() { return {
        searchInput: '',
        timeout: null,
    }},

    watch: {
        searchInput(value, oldValue) {
            if (this.timeout) {
                clearTimeout(this.timeout)
            }
            this.timeout = setTimeout(() => {
                console.log({
                    value,
                    oldValue
                })
                this.search()
            }, 500)
        }
    },

    methods: {
        search() {
            console.log('Search now!')
        }
    }
}
</script>