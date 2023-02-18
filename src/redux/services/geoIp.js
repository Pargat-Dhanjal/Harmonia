import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;

export const geoIpApi = createApi({
  reducerPath: 'geoIpApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', api);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getIp: builder.query({
      query: () => '/',
    }),
  }),
});

export const { useGetIpQuery } = geoIpApi;
