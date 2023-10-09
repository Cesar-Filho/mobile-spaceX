import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import Config from 'react-native-config';
import {ILaunches} from './interface';

interface IGetAllLaunches {
  id?: boolean;
  limit?: number;
  offset?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}

export const apiSlice = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,
  }),
  tagTypes: ['Launches'],
  endpoints: build => ({
    allLaunches: build.query<ILaunches[], IGetAllLaunches>({
      query: ({...params}) => ({
        url: 'launches',
        params,
      }),
    }),
  }),
});

export const {useAllLaunchesQuery} = apiSlice;
