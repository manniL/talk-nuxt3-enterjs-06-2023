import { getRecentJokes } from "../../utils/jokes.js"

export default defineEventHandler(async (event) => {
  const jokes = await getRecentJokes()
  return jokes
})