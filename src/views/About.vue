<template>
  <div class="about">
    <h1>This is an about page</h1>

    <bb-chart :chartData="chartData"></bb-chart>
  </div>
</template>

<script>
export default {
  data() { return {
    chartData: {
      columns: [
            ["data1", 30, 200, 100, 170, 150, 250],
            ["data2", 80, 100, 100, 170, 150, 250],
      ],
      types: {
        data1: 'line',
        data2: 'line'
      },
      colors: {
        data1: 'red',
        data2: 'green'
      }
    }
  }}
}
</script>
