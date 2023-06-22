import { addRecentJoke, fetchJokeFromApi } from "../../utils/jokes.js"

export default defineEventHandler(async () => {
  const joke = await fetchJokeFromApi()
  addRecentJoke(joke)
  return joke
})