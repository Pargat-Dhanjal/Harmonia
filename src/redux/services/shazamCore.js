import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
        headers.set(
        "X-RapidAPI-Key",
        "3ca6672692msh9c7064cbba1f7dfp1e26c6jsnf2352ed9ba77"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => `/charts/track`,
    }),
  }),
});

export const { useGetTracksQuery } = shazamCoreApi;
