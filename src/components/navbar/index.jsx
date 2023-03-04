import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import ChimpanceLogo from "../../assets/illustrations/ChimpanceLogo";
import lottie from "../../assets/lotties/bg-jungla-desk.lottie"
import '@dotlottie/player-component';
import "./navbar.css"

function NavbarApp() {
  return (
    <>
    <nav id="navbar" className="navbar custom-nav">
    <div className="container position-relative">
        <div className="d-none d-md-block">
            <a className="navbar-brand" href="index.php">
                <ChimpanceLogo/>
            </a>
        </div>
        <div className="col-12 d-flex justify-content-center d-md-none">
            <a className="navbar-brand" href="index.php">
                <img loading="lazy"  src="assets/img/iso.svg" alt="Chimpance"/>
            </a>
        </div>
        <div className="d-flex align-items-center">
 
            <a id="contact_nav" href="https://web.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web" target="_blank"  className="btn btn-white d-none d-md-block">Contactanos</a>
            <div className="d-none d-md-block">
                <input type="checkbox" className="toggler" id="toggleButton"/>
                <div className="hamburger checked" id="hamburger"><div></div></div>
            </div>
        </div>
    </div>
</nav>

<div className="menu-wrap nav-mobile">
    <div className="menu checked" id="menu">
        <div>
            <img src="assets/images/referencias.png" />
        <div id="bg-video" className="d-none d-md-block video-container">
                <dotlottie-player id="nav-deskLottie" autoplay loop  mode="normal" src={lottie} background="transparent" style={{width: "100vw", height: "100vh", zIndex:0, transform: "scale(1.3)"}}/>
            </div>
            <div id="bg-video" className="d-block d-md-none video-container" >
                <dotlottie-player autoplay loop  mode="normal" src={lottie} background="transparent" style={{width: "100vw", height: "100vh", zIndex:0, transform: "scale(1.3)"}}/>
            </div>
            <div>
                <ul className="p-0">
                     <li className="mb-4"><img src="./assets/img/img-iso-ojos.gif"/></li> 
                    <li><a className="ff-circularBold" href="desarrollo-web.php">Web UX UI</a></li>
                    <li><a className="ff-circularBold" target="_blank"  href="https://chimpance.digital/branding">Branding</a></li> 
                    <li><a className="ff-circularBold" target="_blank"  href="./">Mkt Digital</a></li> 
                    <li><a className="ff-circularBold" href="#form" id="link">Contacto</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</>
  );
}

export default NavbarApp;
