import useSWR from 'swr'

const fetcher = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    const error = new Error('Failed to fetch GitHub user data')
    error.status = response.status
    throw error
  }
  return response.json()
}

export const useGitHubUser = (username) => {
  const { data, error } = useSWR(
    username ? `/api/github?url=https://api.github.com/users/${username}` : null,
    fetcher,
    { dedupingInterval: 120000 }
  )

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
