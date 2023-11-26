import playButton from '../utils/PlayButton.png'

const Navigation = () => {
    return(
        <div className='flex items-center place-content-around m-10 bg-black rounded-2xl w-52 sm:w-96 md:w-[46rem] xl:w-[65rem]'>
            <button className='text-7xl mb-4 text-white'>&larr;</button>
            <button><img src={playButton} className='w-10'/></button>
            <button className='text-7xl mb-4 text-white'>&rarr;</button>
        </div>
    )
}

export default Navigation