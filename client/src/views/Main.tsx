import { getTrackById, getTracks } from "../api/auth"
import Menu from "../components/Menu"
import Navigation from "../components/Navigation"
import album from "../utils/Michael_Jackson_Album.png"
import { useEffect, useState } from "react"

const Main = ()=> {
    const [tracks, setTracks] = useState([])
    const [selectedTrack, setselectedTrack] = useState(String)
    useEffect(()=>{
        const asyncFunction = async()=>{
            try {
                const res = await getTracks();
                setTracks(res.data.tracks)
            } catch (error) {
                console.error("Error fetching tracks:", error);
            }
        }
        asyncFunction()
    },[])

    const handleClickSong = async(songId:string) =>{
        try {
            const res = await getTrackById(songId);
            const blob = new Blob([res.data], { type: 'audio/mpeg' });
            const audioURL = URL.createObjectURL(blob);
            setselectedTrack(audioURL) 
        } catch (error) {
            console.error('Error fetching or playing song:', error);
        }
    }


    return(
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row mt-20">
                <Menu tracks={tracks} handleClickSong={handleClickSong}/>
                <img src={album} alt="album Thriller" className="rounded-2xl w-48 h-auto sm:w-80 xl:w-96"/>
            </div>
            <Navigation />
        </div>
    )
}

export default Main