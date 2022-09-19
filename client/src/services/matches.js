import axios from 'axios'

export const getMatches = () => axios.get('/matches/all').then(({data}) => data)
