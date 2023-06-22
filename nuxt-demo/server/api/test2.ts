export default defineEventHandler(async (event) => {
  const result = await useStorage('kv').setItem('test', 'enterJS')
  return result
})