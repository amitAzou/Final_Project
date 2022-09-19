import axios from 'axios'

export const getTransfersByCountry = (countryId) =>
  axios.get(`/transfers/${countryId}`).then(({data}) => data)
