import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com/v1'; 
const apiKey = 'live_2hR6vmO0fKmlFnCgcGMpt1FuE1v772VbwtYT6t0y2HYM4ewI8rvpprkJUDkOAB8a'; 

export function fetchBreeds() {
    return axios.get(`${apiUrl}/breeds?api_key=${apiKey}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.data;
        });
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${apiUrl}/images/search?api_key=${apiKey}&breed_ids=${breedId}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.status);
            }
            return response.data;
        });
}