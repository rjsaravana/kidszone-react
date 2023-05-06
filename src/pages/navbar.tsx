import "./style.css";

const Navbar = () => {
  return (
    <div className="container-fluid nav-stick col-10">
    <nav className="navbar navbar-expand-lg p-3" id="navbar">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg></button>
      <img className="img1" src="../assets/icons/animals1.png" style={{height: '5.5rem'}} alt="img" />
      <h5 className="head-h5 m-3 text-center">M4 <br /><span className="kids-text">KIDS</span></h5>
      <div className="collapse nav-header navbar-collapse" id="menu">
        <ul className="navbar-nav mb-lg-0">
          <li className="nav-item">
            <a className="nav-header-text" href="#home">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-header-text" href="#school">SCHOOL</a>
          </li>
          <li className="nav-item">
            <a className="nav-header-text" href="#gallery">GALLERY</a>
          </li>
          <li className="nav-item">
            <a className="nav-header-text" href="#timeline">TIMELINE</a>
          </li>
          <li className="nav-item">
            <a className="nav-header-text" href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    );
};

export { Navbar };