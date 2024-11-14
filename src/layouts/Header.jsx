import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home"><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/logo-main-light-height14px.png" width={110} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <HiMiniBars3BottomRight />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page" >HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MOVIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>

                        <div className="nav-right-side">
                            <button className='btn get-basket-btn'>Get Basket <span>|</span> 0</button>
                            <button className='btn account-btn'><FaRegUser /><span className='enter-account'>ACCOUNT</span></button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header