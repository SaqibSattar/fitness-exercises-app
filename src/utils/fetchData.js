export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_RAPID_HOST_EXERCISE,
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  },
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': import.meta.env.VITE_REACT_APP_RAPID_HOST_YOUTUBE,
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
  },
}

export const fetchData = async (url, options) => {
  const res = await fetch(url, options)
  const data = await res.json()

  return data
}
