import { useState } from "react";
import { Container, Row} from "react-bootstrap";
import '@dotlottie/player-component';
import ImgIsoOjos from "../../assets/illustrations/ImgIsoOjos";
import lottieDesk from "../../assets/lotties/bg-jungla-desk.lottie"
import lottieMobile from "../../assets/lotties/bg-jungla-mobile.lottie"
import "./footerMobile.css";

function FooterMobile() {
    const [activeMenu, setActiveMenu] = useState(false)
  return (
    <section className="d-block d-md-none w-100">
    <Container id="contact-mobile">
        <Row>
            <div className="col-4 d-flex justify-content-center">
                <div style={{width:"42px"}} className="align-self-start">
                    <input type="checkbox" className="toggler" id="toggleButton1" onClick={() => setActiveMenu(!activeMenu)}/>
                    <div className={`hamburger ${activeMenu ? "checked" : ""}`} id="hamburger"><div></div></div>
                </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <a href="tel:+543516503470" className="text-center">
                    <img loading="lazy" width="23.847" height="23.839" alt="phone" src="images/icon-phone.svg"/>
                </a>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <a href="https://api.whatsapp.com/send?phone=+5493516503470&text=Buenos%20d%C3%ADas,%20quiero%20mas%20info%20sobre%20desarrollo%20web" className="text-center">
                    <img loading="lazy" width="23.907" height="24" alt="whatsapp" src="images/icon-whatsapp.svg"/>
                </a>
            </div>
        </Row>
    </Container>
    <Container className="menu-wrap nav-mobile">
        <div className={`menu ${activeMenu ? "checked" : ""}`} id="menu">
            <div>
                <div id="bg-video" className="d-none d-md-block video-container">
                        <dotlottie-player id="nav-deskLottie" autoplay loop  mode="normal" src={lottieDesk} background="transparent" style={{width: "100vw", height: "100vh", zIndex:0, transform: "scale(1.3)"}}/>
                </div>
                <div id="bg-video" className="d-block d-md-none video-container" >
                        <dotlottie-player autoplay loop  mode="normal" src={lottieMobile} background="transparent" style={{width: "100vw", height: "100vh", zIndex:0, transform: "scale(1.3)"}}/>
                </div>
                <div>
                    <ul className="p-0">
                        <li className="mb-4"><ImgIsoOjos customClass="eyes-illustration"/></li> 
                        <li><a className="ff-circularBold" href="desarrollo-web.php">Web UX UI</a></li>
                        <li><a className="ff-circularBold" href="#form" id="link">Contacto</a></li>
                        </ul>
                </div>
            </div>
        </div>
    </Container>
    </section>
  );
}

export default FooterMobile;
