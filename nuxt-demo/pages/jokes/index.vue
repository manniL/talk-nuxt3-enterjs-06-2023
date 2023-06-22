<script setup lang="ts">
  const { data: jokes } = await useFetch('/api/jokes/recent')
</script>

<template>
  <div>
    <h1>Recent jokes</h1>
    <ol>
      <li v-for="joke in jokes" :key="joke.id">
        <NuxtLink :to="`/jokes/${joke.id}`">
          Joke {{ joke.id }}
        </NuxtLink>
      </li>
      </ol>
  </div>
</template>