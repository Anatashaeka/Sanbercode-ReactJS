import React from "react"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const LayoutComponent = (props) => {

    return (
        <>
            <Navbar />
                <div className="section">
                    {props.content}
            </div>
            <Footer />
        </>
    )

}

export default LayoutComponent