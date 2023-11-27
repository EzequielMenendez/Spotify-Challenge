import { getTracks } from "../api/auth"
import Menu from "../components/Menu"
import Navigation from "../components/Navigation"
import album from "../utils/Michael_Jackson_Album.png"
import { useEffect, useState } from "react"

const Main = ()=> {
    const [tracks, setTracks] = useState([])
    const [play, setPlay] = useState(false)
    let currentAudio: HTMLAudioElement | null = null;

    useEffect(()=>{
        const asyncFunction = async()=>{
            try {
                const res = await getTracks();
                setTracks(res.data)
                const audio = new Audio(res.data[0].track);
                currentAudio = audio;
            } catch (error) {
                console.error("Error fetching tracks:", error);
            }
        }
        asyncFunction()
    },[])

    const handleClickSong = (track: string) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const audio = new Audio(track);
        currentAudio = audio;

        audio.addEventListener('ended', () => {
            setPlay(false);
        });

        audio.play();
        setPlay(true);
    };

    const handlePause = async() => {
        if(currentAudio){
            currentAudio.pause();
            setPlay(false);
            return;
        }
    }

    const handlePlay = async() => {
        if(currentAudio){
            currentAudio.play();
            setPlay(true)
            return
        }
    }

    return(
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row mt-20">
                <Menu tracks={tracks} handleClickSong={handleClickSong}/>
                <img src={album} alt="album Thriller" className="rounded-2xl w-48 h-auto sm:w-80 xl:w-96"/>
            </div>
            <Navigation handlePause={handlePause} handlePlay={handlePlay} play={play}/>
        </div>
    )
}

export default Main