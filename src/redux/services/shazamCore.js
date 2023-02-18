import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', api);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => '/charts/track',
    }),
    getCountry: builder.query({
      query: (id) => `/charts/track?listId=${id}`,
    }),
    getSearch: builder.query({
      query: (term) => `/search?term=${term}&limit=5`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?key=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ id }) => `/artists/get-details?id=${id}`,
    }),
    getArtistSongs: builder.query({
      query: ({ id }) => `/artists/get-top-songs?id=${id}`,
    }),
  }),
});

export const {
  useGetTracksQuery,
  useGetCountryQuery,
  useGetSearchQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
} = shazamCoreApi;
