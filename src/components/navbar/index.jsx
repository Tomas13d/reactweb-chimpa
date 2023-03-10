import { useEffect, useRef, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import '@dotlottie/player-component';
import ChimpanceLogo from "../../assets/illustrations/ChimpanceLogo";
import ImgIsoOjos from "../../assets/illustrations/ImgIsoOjos";
import lottie from "../../assets/lotties/bg-jungla-desk.lottie"
import "./navbar.css"

function NavbarApp() {
    const [activeMenu, setActiveMenu] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground

    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
    
  return (
    <>
    <Navbar id="navbar" className={`navbar custom-nav ${navBackground ? "background-filter" : ""}`}>
        <Container fluid className="container position-relative">
            <Navbar.Brand href="/" className="d-none d-md-block"><ChimpanceLogo/></Navbar.Brand>
            <Navbar.Brand href="/" className="col-12 d-flex justify-content-center d-md-none"><ChimpanceLogo/></Navbar.Brand>
            <div className="d-flex align-items-center">
                <a id="contact_nav" rel="noreferrer" href="https://web.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web" target="_blank"  className={`btn btn-white d-none ${activeMenu ? "" : "d-md-block"}`}>Contactanos</a>
                <div className="d-none d-md-block">
                    <input type="checkbox" className="toggler" id="toggleButton" onClick={() => setActiveMenu(!activeMenu)}/>
                    <div className={`hamburger ${activeMenu ? "checked" : ""}`} id="hamburger"><div></div></div>
                </div>
            </div>
        </Container>
    </Navbar>
    <Container className="menu-wrap nav-mobile">
        <div className={`menu ${activeMenu ? "checked" : ""}`} id="menu">
            <div>
                <div id="bg-video" className="d-none d-md-block video-container">
                        <dotlottie-player id="nav-deskLottie" autoplay loop  mode="normal" src={lottie} background="transparent" style={{width: "100vw", height: "100vh", zIndex:0, transform: "scale(1.3)"}}/>
                </div>
                <div id="bg-video" className="d-block d-md-none video-container" >
                        <dotlottie-player autoplay loop  mode="normal" src={lottie} background="transparent" style={{width: "100vw", height: "100vh", zIndex:0, transform: "scale(1.3)"}}/>
                </div>
                <div>
                    <ul className="p-0">
                        <li className="mb-4"><ImgIsoOjos customClass="eyes-illustration"/></li> 
                        <li><a className="ff-circularBold" href="desarrollo-web.php">Web UX UI</a></li>
                        {/* <li><a className="ff-circularBold" target="_blank"  href="https://chimpance.digital/branding">Branding</a></li> 
                        <li><a className="ff-circularBold" target="_blank"  href="./">Mkt Digital</a></li>  */}
                        <li><a className="ff-circularBold" href="#form" id="link">Contacto</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </Container>
</>
  );
}

export default NavbarApp;
