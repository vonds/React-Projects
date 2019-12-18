import axios from 'axios'

const KEY = 'AIzaSyBhTlr7wwdKHsP_6a_41J1t0Mqu3muvJFE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5, 
        key: KEY,
    }
})