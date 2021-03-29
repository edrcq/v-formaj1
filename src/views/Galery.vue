<template>
    <div v-lazy-container>
        <img v-for="(photo, i) in list" :key="i" :data-src="photo" />
    </div>
</template>

<script>
export default {
    data() { return {
        list: [
            'https://images.unsplash.com/photo-1617014673615-8e0e73b06d56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
            'https://images.unsplash.com/photo-1617018517735-3eef5305803d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80'
        ]
    }}
}
</script>