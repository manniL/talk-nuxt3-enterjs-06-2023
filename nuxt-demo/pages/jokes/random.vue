<script setup lang="ts">
  const { data } = await useFetch('/api/jokes/random')
</script>

<template>
  <div>
    <h1>Random Dad Joke</h1>
    <p>{{ data.joke }}</p>
    <NuxtLink :to="`/jokes/${data.id}`">
      Go to joke page
    </NuxtLink>
  </div>
</template>