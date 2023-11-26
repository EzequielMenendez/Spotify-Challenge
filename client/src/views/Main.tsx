import Menu from "../components/Menu"
import Navigation from "../components/Navigation"
import album from "../utils/Michael_Jackson_Album.png"

const Main = ()=> {
    return(
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-10 flex-col md:flex-row mt-20">
                <Menu />
                <img src={album} alt="album Thriller" className="rounded-2xl w-48 h-auto sm:w-80 xl:w-96"/>
            </div>
            <Navigation />
        </div>
    )
}

export default Main