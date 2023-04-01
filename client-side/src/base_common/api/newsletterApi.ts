import { emptySplitApi } from './emptySplitApi'

const newsletterApi = emptySplitApi.injectEndpoints({
  endpoints: ( build ) => ({
    addNewEmailToNewsletterList: build.query({
      query:  email  => ({ 
		url:'newsletter', 
		method: 'POST',
		body: email
	})
    }),
  }),
  overrideExisting: false,
})

export const { useAddNewEmailToNewsletterListQuery } = newsletterApi