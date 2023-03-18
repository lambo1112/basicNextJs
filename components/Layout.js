import Navber from "./Navbar"
import Footer from "./Footer"
export default function Layout({children}){
    return(
        <div>
            <Navber/>
                {children}
            <Footer/>
        </div>
    )
}