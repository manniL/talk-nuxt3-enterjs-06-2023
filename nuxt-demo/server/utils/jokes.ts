export async function addRecentJoke (joke: Joke): Promise<Joke[]> {
  const jokes = await getRecentJokes()

  // Keep ten jokes around
  const newJokes = jokes.slice(0,10)
  newJokes.unshift(joke)
  
  await setRecentJokes(newJokes)
  return newJokes
}

export async function getRecentJokes (): Promise<Joke[]> {
  const lastJokes = await useStorage('kv').getItem<Joke[]>('lastJokes')
  return lastJokes ?? []
}

async function setRecentJokes (jokes: Joke[]): Promise<void> {
  await useStorage('kv').setItem<Joke[]>('lastJokes', jokes)
}

export async function fetchJokeFromApi (id?: string): Promise<Joke> {
  const suffix = id ? 'j/' + id : ''
  return $fetch(`https://icanhazdadjoke.com/${suffix}`, {
    headers: {
      Accept: 'application/json'
    }
  })
}