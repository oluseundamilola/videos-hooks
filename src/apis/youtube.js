import axios from 'axios';

const KEY = 'AIzaSyDl7nMwlu2seUzv5F2nXrfye--Z68Yr984';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});