import React from 'react';
import michaeljackson from '../utils/michaeljackson.jpg'

interface Track {
    _id: string;
    name: string;
    track: string;
}

interface TracksData {
    tracks: Track[];
    handleClickSong: Function;
}

const Menu: React.FC<TracksData> = (props) => {
    const {tracks, handleClickSong} = props
    return(
        <div className='flex flex-col items-center justify-center border border-black rounded-2xl gap-10 w-52 sm:w-96 xl:w-[36rem]'>
            <div className='flex items-center border border-black rounded-md place-content-around w-10/12 pt-1 pb-1 mt-10'>
                <img src={michaeljackson} alt="Michael Jackson" className='rounded-full w-16 sm:w-24'/>
                <h2 className='text-lg ml-1'>Michael Jackson</h2>
            </div>
            <div className='flex flex-col border border-black w-10/12 h-36 mb-10 overflow-y-scroll scrollbar'>
                {tracks.map((track)=>(
                    <div key={track._id}>
                        <button onClick={()=> handleClickSong(track.track)} className='border border-y-black w-full p-3 h-12 overflow-hidden whitespace-nowrap text-overflow-ellipsis'>{track.name}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu