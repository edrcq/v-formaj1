import Vue from 'vue'

Vue.component('h-title', {
    name: 'h-title',

    render: function(createElement) {
        return createElement(
            `h${this.level}`,
            this.$slots.default
        )
    },

    props: {
        level: Number,
    }
})

export default Vue.component('h-title')