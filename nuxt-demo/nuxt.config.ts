// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    '/api/jokes/random': {
      swr: 60
    },
    '/api/jokes/recent': {
      swr: true
    }
  },
  nitro: {
    storage: {
      kv: {
        driver: 'cloudflare-kv-http',
        accountId: process.env.CF_ACCOUNT_ID,
        namespaceId: process.env.CF_KV_NAMESPACE_ID,
        apiToken: process.env.CF_API_TOKEN
      }
    }
  }
})
