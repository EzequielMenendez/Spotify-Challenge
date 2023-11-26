import michaeljackson from '../utils/michaeljackson.jpg'

const Menu = () => {
    return(
        <div className='border border-black rounded-2xl'>
            <div className='flex items-center border border-black rounded-md place-content-around m-10'>
                <img src={michaeljackson} alt="Michael Jackson" className='rounded-full w-32'/>
                <h2 className='text-xl'>Michael Jackson</h2>
            </div>
            <div className='flex flex-col items-center border border-black rounded-2xl m-10'>
                <p>Song 1</p>
                <p>Song 2</p>
                <p>Song 3</p>
            </div>
        </div>
    )
}

export default Menu