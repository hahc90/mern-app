import { splitApi } from '../base_common/api/splitApi'

const extendedApi = splitApi.injectEndpoints({
  endpoints: ( builder ) => ({
    example: builder.query({
      query: () => 'clients',
    }),
  }),
  overrideExisting: false,
})

export const { useExampleQuery } = extendedApi