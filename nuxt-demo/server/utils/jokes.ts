export async function fetchJokeFromApi (id?: string): Promise<Joke> {
  const suffix = id ? `/j/${id}` : ''

  const joke = await $fetch<Joke>(`https://icanhazdadjoke.com/${suffix}`, {
    headers: {
      Accept: 'application/json',
    }
  })
  return joke
}

export async function getRecentJokes (): Promise<Joke[]> {
  const jokes = await useStorage('kv').getItem<Joke[]>('recentJokes')
  return jokes ?? []
}

export async function setRecentJokes (jokes: Joke[]): Promise<void> {
  await useStorage('kv').setItem('recentJokes', jokes)
}


export async function addRecentJoke (joke: Joke): Promise<void> {
  const jokes = await getRecentJokes()
  const newJokes = jokes.slice(0, 9)
  newJokes.unshift(joke)
  await setRecentJokes(newJokes)
}