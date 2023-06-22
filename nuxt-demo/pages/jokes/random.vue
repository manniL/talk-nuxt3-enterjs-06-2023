<script setup lang="ts">
  // Fetch jokes
  const { data: joke } = await useFetch('/api/jokes/random')
</script>

<template>
  <div>
    {{ joke }}
  </div>
</template>