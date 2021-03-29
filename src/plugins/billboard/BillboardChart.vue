<template>
    <div>
        <div ref="chart"></div>
    </div>
</template>

<script>
import bb, { line } from 'billboard.js'

export default {
    props: {
        chartData: { required: true, default: () => {} }
    },

    mounted() {
        console.log(this.$refs.chart)
        for (let i in this.chartData.types) {
            this.chartData.types[i] = line();
        }
        bb.generate({
            bindto: this.$refs.chart,
            data: this.chartData,
        })
    }
}
</script>