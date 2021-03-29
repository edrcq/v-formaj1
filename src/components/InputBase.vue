<template>
    <div>
        <input :value="value" @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: 'input-base',

    props: {
        value: String,
    },
}
</script>