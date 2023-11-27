import { Outlet } from "react-router-dom";
import Hearder from "./Hearder";
import Footer from "./Footer";
import Banner from "./Banner";

export default function Layout() {
    return (
        <>
        <Hearder/>

        <Banner/>

        <main>
            <Outlet/>
        </main>

        <Footer/>
        </>
    )
}