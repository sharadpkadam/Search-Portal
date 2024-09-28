import React from 'react'
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const NavBar =()  => {
  let navigate = useNavigate();
  const handleLogout =() =>{
    localStorage.removeItem('token');
    navigate("/login");
  }
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Letzstepin</Link>
                    {/* <Link href="index.html" className="logo d-flex align-items-center">
                      <img src="logo13.png" alt=""/>  
                    </Link> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" >About</Link></li>
                            <li className="nav-item"><Link className="nav-link" >Contact us</Link></li>
                            <li className="nav-item"><Link className="nav-link" >Services</Link></li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex" role="search">
                         <Link className ="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                         <Link className ="btn btn-primary mx-1" to="/signup"role="button">Signup</Link>
                          </form> : <button onClick={handleLogout} className='btn btn-primary'>Sign out</button>}
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar