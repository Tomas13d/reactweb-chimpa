import { useEffect, useState } from "react";
import AOS from "aos";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import jqueryMasonryGalery from "./galeryScript";
import "./galeryDesktop.css";

function Galery({ sectionTitle }) {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [flag, setFlag] = useState(false);
  const [activeCategory, setActiveCategory] = useState();

  useEffect(() => {
    AOS.init({ once: true });
    jqueryMasonryGalery();
  }, [flag]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
      setFlag(flag ? false : true);
    }
  }, [sortedJson]);

  const handleChange = (e) => {
    setActiveCategory(e.target.value);
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <Container className="galery-section">
      <div className="mb-5">
        <div className="yellow-separator mb-4"></div>
        <h5 class="mb-1 ff-circularBold">{sectionTitle}</h5>
        <h5 class="fc-lightBlue mb-1 ff-circularBold">Nuestros Proyectos</h5>
      </div>
      <Container className="portfolio">
        <Container>
          <Row className="mb-3">
            <div className="col-12">
              <div
                className="btn-group btn-group-toggle "
                data-toggle="buttons"
              >
                {categories[0] &&
                  categories.map((category, i) => (
                    <label
                      className={`btn ${
                        activeCategory === category ? "active-chip" : ""
                      }`}
                      key={i + new Date().getTime}
                    >
                      <input
                        type="radio"
                        name="shuffle-filter"
                        value={category}
                        onChange={handleChange}
                        className="radio-hidden"
                      />
                      {category === "all" ? "Todos" : category}
                    </label>
                  ))}
              </div>
            </div>
          </Row>
          <div className="row shuffle-wrapper portfolio-gallery">
            {proyects[0] &&
              proyects.map((proyect, i) => (
                <div
                  key={i + new Date().getTime}
                  className="col-lg-4 col-6 mb-4 shuffle-item"
                  data-groups={JSON.stringify(proyect.CATEGORIA)}
                >
                  <div className="position-relative inner-box">
                    <div className="image position-relative ">
                      <img
                        src={`images/portfolio/${proyect.IMG_SRC}`}
                        alt={proyect.PROYECTO}
                        className="img-fluid w-100 d-block"
                      />
                      <div className="overlay-box">
                        {proyect.LINK === "No funciona" ? (
                          <></>
                        ) : (
                          <a
                            className="portfolio-image popup-gallery"
                            href={proyect.LINK}
                          >
                            <i className="bi bi-arrow-up-right"></i>
                          </a>
                        )}

                        <div className="overlay-inner">
                          <div className="overlay-content">
                            <h5 className="mb-0">{proyect.PROYECTO}</h5>
                            <p>{proyect.CATEGORIA.join()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </Container>
    </Container>
  );
}

export default Galery;