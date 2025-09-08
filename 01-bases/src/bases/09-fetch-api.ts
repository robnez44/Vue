import type { GIFResponse } from "../interface/gif.response";

const apiKey = 'EzSdQeOMuCTGU5A8VYJsNVWMIiQOuXx0';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then( (body: GIFResponse) => {
        console.log(body.data.images.downsized_medium.url );
    })
    .catch( err => console.info(err));