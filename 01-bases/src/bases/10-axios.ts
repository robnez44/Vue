import axios from 'axios';
import type { GIFResponse } from '../interface/gif.response';

const apiKey = 'EzSdQeOMuCTGU5A8VYJsNVWMIiQOuXx0';

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,

    }
});

giphyAPI.get<GIFResponse>('/random')
    .then( resp => console.log(resp.data.data.images.downsized_large.url))
    .catch( err => console.log(err));