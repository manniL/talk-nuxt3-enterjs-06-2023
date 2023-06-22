// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/jokes/random': {
      swr: 60
    }
  },
  nitro: {
    storage: {
      kv: {
        driver: 'cloudflareKVHTTP',
        accountId: process.env.CF_ACCOUNT_ID,
        namespaceId: process.env.CF_KV_NAMESPACE_ID,
        apiToken: process.env.CF_API_TOKEN
      }
    }
  }
})
