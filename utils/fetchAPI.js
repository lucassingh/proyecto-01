import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const{ data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'b7c15d0afdmsha1c44e6830f1c89p1a95c8jsna6792f9abf18'
        }
    })
    return data;
}