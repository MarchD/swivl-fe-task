import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../models/user';

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/'
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<UserType[], {limit: number, since: number}>({
      query: ({limit = 5, since = 10}) => ({
        url: '/users',
        params: {
          per_page: limit,
          since
        }
      })
    }),
    fetchUserById: build.query<UserType, string>({
      query: (login) => ({
        url: `/users/${login}`,
      })
    }),
  })
});

export const {useFetchAllUsersQuery, useFetchUserByIdQuery} = userAPI;
