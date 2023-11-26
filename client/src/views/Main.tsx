import Menu from "../components/Menu"
import album from "../utils/Michael_Jackson_Album.png"

const Main = ()=> {
    return(
        <div>
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
                <Menu />
                <img src={album} alt="album Thriller" className="rounded-2xl w-48 h-auto sm:w-80 xl:w-96"/>
            </div>
        </div>
    )
}

export default Main