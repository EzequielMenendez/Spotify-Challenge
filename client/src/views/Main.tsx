import { getTracks } from "../api/auth"
import Menu from "../components/Menu"
import Navigation from "../components/Navigation"
import album from "../utils/Michael_Jackson_Album.png"
import { useEffect, useState, useRef } from "react"

const Main = ()=> {
    const [tracks, setTracks] = useState([]) as any
    const [play, setPlay] = useState(false)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
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

    const handleClickSong = (inx: number) => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }

        const audio = new Audio(tracks[inx].track);
        setCurrentTrackIndex(inx)
        audioRef.current = audio;

        audio.onended = () => {
            handleNext()
        };

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

    const handleNext = () => {
        const nextIndex = (currentTrackIndex + 1) % tracks.length;
        setCurrentTrackIndex(nextIndex);
        handleClickSong(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrackIndex(prevIndex);
        handleClickSong(prevIndex);
    };

    return(
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row mt-20">
                <Menu tracks={tracks} handleClickSong={handleClickSong}/>
                <img src={album} alt="album Thriller" className="rounded-2xl w-48 h-auto sm:w-80 xl:w-96"/>
            </div>
            <Navigation handlePause={handlePause} handlePlay={handlePlay} handlePrev={handlePrev} handleNext={handleNext} play={play}/>
        </div>
    )
}

export default Main