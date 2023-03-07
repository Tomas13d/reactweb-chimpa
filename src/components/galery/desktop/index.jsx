import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import Shuffle from "shufflejs";
import jqueryMasonryGalery from "./galeryScript";
import "./galeryDesktop.css";

function Galery({ sectionTitle }) {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [activeFilter, setActiveFilters] = useState([]);
  const [shuffleRef, setShuffleRef] = useState();

  useEffect(() => {
    AOS.init({ once: true });
    const shuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
      itemSelector: ".shuffle-item",
      buffer: 1,
    });
    setShuffleRef(shuffle);
  }, []);

  useEffect(() => {
    if (shuffleRef) {
      shuffleRef.resetItems();
    }
  }, [proyects]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
    }
  }, [sortedJson]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    const filters = activeFilter;
    input.checked
      ? filters.push(input.value)
      : filters.splice(filters.indexOf(input.value), 1);
    shuffleRef.filter(filters);
  };

  return (
    <Container className="galery-section">
      <div className="mb-5">
        <div className="yellow-separator mb-4"></div>
        <h5 class="mb-1 ff-circularBold">{sectionTitle}</h5>
        <h5 class="fc-lightBlue mb-1 ff-circularBold">Nuestros Proyectos</h5>
      </div>
      <Row className="">
        <div className="col-2">
          {categories[0] &&
            categories.map((category, i) => (
              <label className={`btn`} key={i + new Date().getTime}>
                <input
                  type="checkbox"
                  name="shuffle-filter"
                  value={category}
                  onChange={handleChange}
                />
                {category === "all" ? "Todos" : category}
              </label>
            ))}
        </div>
        <div className="col-10">
          <div className="row shuffle-wrapper">
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
        </div>
      </Row>
    </Container>
  );
}

export default Galery;

/*
 */
