import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'c7d2c615e2mshc137c8bf73401edp1ca146jsn284aa7fa4032'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => '/charts/track',
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/songs/get-details?key=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) => `/songs/list-recommendations?key=${songid}`,
    }),
  }),
});

export const {
  useGetTracksQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
