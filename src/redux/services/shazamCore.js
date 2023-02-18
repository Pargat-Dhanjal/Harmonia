import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '206346fb4dmshf91b84716545453p182d1bjsn0a3797fc49ca'
      );
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
