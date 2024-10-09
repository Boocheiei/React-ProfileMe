import '../../assets/css/nav.css';
import logo from '../../assets/img/logo.png';
import React from 'react';

function Nav() {
    return (
        <div className="grid-nav">
            <div className='navname'>
                <p>
                    <span>
                        BoochVeerapat
                    </span>
                </p>
            </div>
            <div className="nav-logo">
                <img src={logo} alt='logo' />
            </div>
            <div className='grid-nav-meun'>
                <div>
                    <h1>Home</h1>
                </div>
                <div>
                    <h1>HtmlCssJs</h1>
                </div>
                <div>
                    <h1>React</h1>
                </div>
            </div>
        </div>
    );
}
export default Nav;