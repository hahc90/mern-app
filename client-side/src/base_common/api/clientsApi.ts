import { emptySplitApi } from './emptySplitApi'

const clientsApi = emptySplitApi.injectEndpoints({
  endpoints: ( build ) => ({
    getAllClients: build.query({
      query: () =>  'clients'
    }),
  }),
  overrideExisting: false,
})

export const { useGetAllClientsQuery } = clientsApi