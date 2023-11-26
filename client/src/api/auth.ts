import axios from "./axios"

export const getTracks = () => {
    return axios.get(`/tracks`)
}

export const getTrackById = (id:string) =>{
    return axios.get(`/tracks/${id}`)
}