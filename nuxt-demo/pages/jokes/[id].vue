<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api/jokes/${route.params.id}`)
</script>

<template>
  <div>
    <h1>Dad Joke #{{ data.id }}</h1>
    <p>{{ data.joke }}</p>
    <NuxtLink to="/jokes/random">Go back to the random joke site</NuxtLink>
  </div>
</template>