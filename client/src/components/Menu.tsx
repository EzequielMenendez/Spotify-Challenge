import michaeljackson from '../utils/michaeljackson.jpg'

const Menu = () => {
    return(
        <div className='flex flex-col items-center justify-center border border-black rounded-2xl gap-10 w-52 sm:w-96 xl:w-[36rem]'>
            <div className='flex items-center border border-black rounded-md place-content-around w-10/12 pt-1 pb-1 mt-10'>
                <img src={michaeljackson} alt="Michael Jackson" className='rounded-full w-16 sm:w-24'/>
                <h2 className='text-lg ml-1'>Michael Jackson</h2>
            </div>
            <div className='flex flex-col items-center border border-black rounded-2xl w-10/12 h-3/6 mb-10'>
                <p className='border border-y-black w-full p-3'>Song 1</p>
                <p className='border border-y-black w-full p-3'>Song 2</p>
                <p className='border border-y-black w-full p-3'>Song 3</p>
            </div>
        </div>
    )
}

export default Menu