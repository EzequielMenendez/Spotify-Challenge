import React from 'react'
import playButton from '../utils/PlayButton.png'
import pauseButton from '../utils/PauseButton.png'

interface Props {
    handlePlay: () => void;
    handlePause: () => void;
    handleNext: () => void;
    handlePrev: () => void;
    play:boolean;
}

const Navigation: React.FC<Props> = (props) => {
    const {handlePlay, handlePause, handleNext, handlePrev, play} = props

    return(
        <div className='flex items-center place-content-around m-10 bg-black rounded-2xl w-52 sm:w-96 md:w-[46rem] xl:w-[65rem]'>
            <button onClick={()=> handlePrev()} className='text-7xl mb-4 text-white'>&larr;</button>
            {play ? <button onClick={()=> handlePause()}><img src={pauseButton} className='w-10'/></button> : <button onClick={()=> handlePlay()}><img src={playButton} className='w-10'/></button>}
            <button onClick={()=> handleNext()} className='text-7xl mb-4 text-white'>&rarr;</button>
        </div>
    )
}

export default Navigation