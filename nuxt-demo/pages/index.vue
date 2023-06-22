<script setup lang="ts">
const { data, pending } = useLazyFetch('/api/jokes/recent')
</script>

<template>
    <h1>Hey enterJS!</h1>
    <h2>Recent Jokes</h2>
    <template v-if="!pending">
        <ol v-for="joke in data">
            <NuxtLink :to="`/jokes/${joke.id}`">
                Joke #{{ joke.id }}
            </NuxtLink>
        </ol>
    </template>
    <p v-else>Loading...</p>
</template>