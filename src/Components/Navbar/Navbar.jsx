import React,{useState} from 'react';
import './navbar.scss'


const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav id="navBar" className={colorChange ? 'navbar fixed-top navbar-expand-lg colorChange' : 'navbar fixed-top navbar-expand-lg sinColor'}>
            <div className="container-fluid">
              
                <a href={"/"} id="roque-santeiro" className="navbar-brand" >
                    <img src="assets/netflix.png" alt="logo-netflix" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item active"><a href="/">Home</a></li>
                        <li className="nav-item "><a href="/">TV Shows</a></li>
                        <li className="nav-item "><a href="/">Movies</a></li>
                        <li className="nav-item "><a href="/">New & Popular</a></li>
                        <li className="nav-item "><a href="/">My List</a></li>
                    </ul>
                    <ul className="navbar-nav ml-auto rr">
                        <li className="nav-item" ><i id="car" className="fa fa-search  mr-4"></i></li>
                        <li className="nav-item "><i  className="fa fa-bell mr-4"></i></li>
                        <li className="nav-item ">
                           
                                <img src="assets/design.png" className="figure-img img-fluid rounded" alt="..." width="35" height="35"/>
                        </li>
                    </ul>

                </div>
            </div>

        </nav>
    );
}

export default Navbar;
