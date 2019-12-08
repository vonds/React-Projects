import axios from 'axios'

export default axios.create({
    baseURL:  'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9ac087cb783f54de761f9e638f8b4e0233ff658bf877be625adfc1a512293388'
    }
})
