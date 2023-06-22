<script setup>

const color = useState('color')

function changeColor () {
  const newColorValue = color.value === 'rebeccapurple' ? 'red' : 'rebeccapurple'
  color.value = newColorValue
}
</script>
<template>
  <button @click="changeColor">
    Change color from {{ color }}
  </button>
</template>