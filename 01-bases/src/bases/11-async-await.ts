import type { GIFResponse } from "../interface/gif.response";
import { giphyAPI } from "./10-axios";

export const getImage = async() => {
    try {
        const resp = await giphyAPI.get<GIFResponse>('/random');
    
        return resp.data.data.images.downsized_medium.url;    
        
    } catch (error) {
        throw 'Url no encontrado'
    }
}
    

getImage()
    .then((url) => console.log({url}))
    .catch( error => console.log(error) );
    