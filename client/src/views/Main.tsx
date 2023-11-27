import { getTracks } from "../api/auth"
import Menu from "../components/Menu"
import Navigation from "../components/Navigation"
import album from "../utils/Michael_Jackson_Album.png"
import { useEffect, useState, useRef } from "react"

const Main = ()=> {
    const [tracks, setTracks] = useState([])
    const [play, setPlay] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(()=>{
        const asyncFunction = async()=>{
            try {
                const res = await getTracks();
                setTracks(res.data)
                const audio = new Audio(res.data[0].track);
                audioRef.current = audio;
            } catch (error) {
                console.error("Error fetching tracks:", error);
            }
        }
        asyncFunction()
    },[])

    const handleClickSong = (track: string) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = new Audio(track);
        audioRef.current = audio;

        audio.addEventListener('ended', () => {
            setPlay(false);
        });

        audio.play();
        setPlay(true);
    };

    const handlePause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setPlay(false);
        }
    };

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setPlay(true);
        }
    };

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