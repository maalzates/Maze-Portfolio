import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => {

    return (
        <div className="header-container">
            <ul className="menu-container">
                <li className="header-menu-item">
                    <svg id="main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 98.001">
                        <path id="Sustracción_12" data-name="Sustracción 12" d="M-4107-1448h-274a8.009,8.009,0,0,1-8-8v-82a8.009,8.009,0,0,1,8-8h274a8.009,8.009,0,0,1,8,8v82A8.009,8.009,0,0,1-4107-1448Zm-252.23-85.986h0l-2.637,15.914,30.05,57.746,30.064-57.658-2.651-16-27.413,53.153-27.413-53.153Zm187.787,1.675h0L-4215.9-1462h53.571v-10.046h-36.2l37.876-60.266Zm-66.362,55.244L-4231-1462h10.881l-33.482-71.986L-4287.085-1462h10.88l6.8-15.067h.036l15.763-34.735v0l15.761,34.735Zm-125.625-31.573h0l-7.728,46.641h10.254l5.158-32.078-7.684-14.563Zm208.781,36.561V-1462h40.177v-10.046h-30.133v-.034Zm-145.6-36.844h0l-7.65,14.762,5.171,32.161h10.254l-7.775-46.924Zm145.6,6.889v9.9h35.155v-9.9Zm0-30.277v10.045h40.177v-10.045Zm-59.572,0v10.045h31.562l6.476-10.044Z" transform="translate(4389 1546)" fill="#fff"/>
                    </svg>
                </li>
                <li className="header-menu-item"> <a href="#">PROJECTS</a></li>
                <li className="header-menu-item"><a href="#">ABOUT</a></li>
                <li className="header-menu-item"><a href="#">CONTACT</a></li>
            </ul>
        </div>
    )
};

export default Header;