import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const geoIpApi = createApi({
  reducerPath: 'geoIpApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'c7d2c615e2mshc137c8bf73401edp1ca146jsn284aa7fa4032'
      );
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
