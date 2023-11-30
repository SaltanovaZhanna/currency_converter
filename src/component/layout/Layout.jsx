import {Outlet} from "react-router-dom";
import Header from '../header/Header';
import Footer from "../footer/Footer";


function Layout () {
    return (
        <>
            <Header />
            <main>
                <div className='main-wrapper container'>
                    <Outlet />
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Layout;