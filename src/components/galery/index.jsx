import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import jqueryMasonryGalery from "./galeryScript";
import AOS from 'aos';
import "./galery.css";

function Galery({deskTopText, mobileText, headerClass }) {
    useEffect(() => {
        AOS.init({ once: true });
        jqueryMasonryGalery()
      }, []);
  return (
    <section class="portfolio ">
    <div class="container">
        <div class="row shuffle-wrapper portfolio-gallery">
            <div class="col-lg-4 col-6 mb-4 shuffle-item"
                data-groups="[&quot;design&quot;,&quot;illustration&quot;]">
                <div class="position-relative inner-box">
                    <div class="image position-relative ">
                        <img src="images/portfolio/1.jpg" alt="portfolio-image" class="img-fluid w-100 d-block"/>
                        <div class="overlay-box">
                            <a class="portfolio-image popup-gallery" href="images/portfolio/1.jpg">
                                <i class="ti-plus"></i>
                            </a>
                            <div class="overlay-inner">
                                <div class="overlay-content">
                                    <h5 class="mb-0">Painting</h5>
                                    <p>Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;branding&quot;]">
                <div class="position-relative inner-box">
                    <div class="image position-relative ">
                        <img src="images/portfolio/bag.jpg" alt="portfolio-image" class="img-fluid w-100 d-block"/>
                        <div class="overlay-box">
                            <a class="portfolio-image popup-gallery " href="images/portfolio/bag.jpg">
                                <i class="ti-plus"></i>
                            </a>
                            <div class="overlay-inner">
                                <div class="overlay-content">
                                    <h5 class="mb-0">Web app</h5>
                                    <p>Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;illustration&quot;]">
                <div class="position-relative inner-box">
                    <div class="image position-relative ">
                        <img src="images/portfolio/3.jpg" alt="portfolio-image" class="img-fluid w-100 d-block"/>
                        <div class="overlay-box">
                            <a class="portfolio-image popup-gallery" href="images/portfolio/3.jpg">
                                <i class="ti-plus"></i>
                            </a>
                            <div class="overlay-inner">
                                <div class="overlay-content">
                                    <h5 class="mb-0 ">Business </h5>
                                    <p>marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;branding&quot;]">
                <div class="position-relative inner-box">
                    <div class="image position-relative ">
                        <img src="images/portfolio/m-3.jpg" alt="portfolio-image" class="img-fluid w-100 d-block"/>
                        <div class="overlay-box">
                            <a class="portfolio-image popup-gallery" href="images/portfolio/m-3.jpg">
                                <i class="ti-plus"></i>
                            </a>
                            <div class="overlay-inner">
                                <div class="overlay-content">
                                    <h5 class="mb-0">Portfolio</h5>
                                    <p>Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;illustration&quot;]">
                <div class="position-relative inner-box">
                    <div class="image position-relative ">
                        <img src="images/portfolio/bottle.jpg" alt="portfolio-image"
                            class="img-fluid w-100 d-block"/>
                        <div class="overlay-box">
                            <a class="portfolio-image popup-gallery" href="images/portfolio/bottle.jpg">
                                <i class="ti-plus"></i>
                            </a>
                            <div class="overlay-inner">
                                <div class="overlay-content">
                                    <h5 class="mb-0">Modern web</h5>
                                    <p>Seo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[&quot;design&quot;,&quot;photo&quot;]">
                <div class="position-relative inner-box">
                    <div class="image position-relative ">
                        <img src="images/portfolio/6.jpg" alt="portfolio-image" class="img-fluid w-100 d-block"/>
                        <div class="overlay-box">
                            <a class="portfolio-image popup-gallery" href="images/portfolio/6.jpg">
                                <i class="ti-plus"></i>
                            </a>
                            <div class="overlay-inner">
                                <div class="overlay-content">
                                    <h5 class="mb-0">Agency web</h5>
                                    <p>Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}

export default Galery;
