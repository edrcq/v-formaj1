<template>
    <router-link :to="`/admin/update-post/${id}`">Edit now</router-link>
</template>

<script>
export default {
    props: ['id']
}
</script>