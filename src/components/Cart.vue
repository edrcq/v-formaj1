<template>
    <div>
        <span v-for="(item, i) in list" :key="`${i}_cart`">{{ item.name }}</span>
        <button @click="purchase">Buy Now</button>
    </div>
</template>

<script>
export default {
    props: {
        rawList: Array
    },

    computed: {
        list() {
            const list = {}
            for (let p of this.rawList) {
                if (!list[p.id]) 
                    list[p.id] = {...p, quantity: 1}
                else
                    list[p.id].quantity++
            }
            return list
        },

        total() {
            return this.rawList.reduce(((acc, el) => acc + el.price), 0)
        }
    },

    methods: {
        purchase() {
            return this.total;
        }
    }
}
</script>