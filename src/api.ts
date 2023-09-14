import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Movie } from './App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: (builder) => ({
    getMoviesTermo: builder.query<Movie[], void>({
      query: (term) => `search/movie?query=${term}`
    }),
    getMoviesGenero: builder.query({
      query: (genero1) => `discover/movie?with_genres=${genero1}`
    }),
    getMoviesDetalhes: builder.query<Movie[], void>({
      query: (movieId) => `movie/${movieId}`
    })
  })
})

export const {
  useGetMoviesTermoQuery,
  useGetMoviesGeneroQuery,
  useGetMoviesDetalhesQuery
} = api

export default api
