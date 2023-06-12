function NavBars(){
    return (
        <div className="row justify-content-md-center">
        <div className="col col-lg-10 mx-1 my-5 p-1 mb-5">
                <nav id="navbar-example2" className="navbar">
                <a className="navbar-brand txt1" href="#scrollbio"><b>Yuvaraja D</b></a>
                <ul className="nav nav-pills">
                <li className="nav-item">
                <a className="nav-link txt" href="#scrolledu">Education</a>
                </li>
                <li className="nav-item">
                <a className="nav-link txt" href="#scrollprojects">Projects</a>
                </li>
                <li className="nav-item">
                <a className="nav-link txt" href="#scrollspyHeading2">Contact</a>
                </li>
                </ul>
            
        </nav>
        </div>
        </div>
    );
}

export default NavBars;