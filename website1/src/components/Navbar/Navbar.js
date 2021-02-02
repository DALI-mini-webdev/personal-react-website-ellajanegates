import React from 'react';
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { Button } from "../Button";

class Navbar extends React.Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Ella Gates<i className="far fa-star"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key = {index}>
                                <a className={item.className} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button>Say Hello</Button>
            </nav>
        )
    }
}

export default Navbar;