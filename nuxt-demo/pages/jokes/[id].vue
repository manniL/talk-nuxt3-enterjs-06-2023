<script setup lang="ts">
  // Fetch jokes
  const route = useRoute()
  const id = route.params.id

  const { data: joke } = await useFetch(`/api/jokes/${id}`)
</script>

<template>
  <div>
    {{ joke }}
  </div>
</template>