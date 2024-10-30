import React from 'react'
import Header from './COMPONENT/Header/Header'
import Footer from './COMPONENT/Footer/Footer'
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
    <Header/>
     <Outlet/>
    <Footer/>
        </>
    )
}

export default Layout
