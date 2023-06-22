export default defineEventHandler(async (event) => {
  const result = await useStorage('kv').getItem('test')
  return result
})