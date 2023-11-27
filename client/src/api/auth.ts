import axios from "./axios"

export const getTracks = () => {
    return axios.get(`/tracks`)
}