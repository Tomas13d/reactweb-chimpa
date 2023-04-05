import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Shuffle from "shufflejs";
import { Container, Row } from "react-bootstrap";
import FilterDropdown from "../filterDropdown";
import { sortByPriority, sortNewer, sortOldest } from "../sortFunctions";
import { proyectJson, allCategories } from "../../../utils/galery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./galeryDesktop.css";

function DesktopGalery({ firstTitle, secondTitle }) {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [activeFilter, setActiveFilters] = useState([]);
  const [shuffleRef, setShuffleRef] = useState();
  const [showMore, setShowMore] = useState(1);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [inLast, setInLast] = useState(false);
  const [flag, setFlag] = useState(false);

  const lastImage = useRef(null);
  const loadAmount = useRef(9);

  useEffect(() => {
    if (proyectJson) setProyects(sortByPriority(proyectJson));
    if (allCategories) setCategories(allCategories);
    setFlag((flag) => !flag);
   
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
    const shuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
      itemSelector: ".shuffle-item",
      buffer: 1,
    });
    setShuffleRef(shuffle);
  }, [flag]);

  useEffect(() => {
    if (shuffleRef) shuffleRef.layout();
    if (
      lastImage.current !== null &&
      !lastImage.current.classList.contains("no-load") &&
      parseInt(lastImage.current.dataset.position) === proyects.length - 1
    ) {
      setInLast(true);
    }
  }, [showMore, activeFilter]);

  useEffect(() => {
    setTimeout(()=>{
      if (shuffleRef) shuffleRef.layout();
    },1500)
    if (shuffleRef) shuffleRef.resetItems();
  }, [proyects]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    const filters = activeFilter;
    if (input.checked) {
      filters.push(input.value);
      setShowMore(999);
    } else {
      filters.splice(filters.indexOf(input.value), 1);
      if (filters.length !== 0) {
        setShowMore(999);
      } else {
        setShowMore(1);
        setInLast(false);
      }
    }
    setActiveFilters(filters);
    shuffleRef.filter(filters);
  };

  const handleSort = (e) => {
    let value = e.target.value;
    shuffleRef.remove(proyects);
    if (value === "relevant") setProyects(sortByPriority(proyects));
    if (value === "older") setProyects(sortOldest(proyects));
    if (value === "newer") setProyects(sortNewer(proyects));
    setShowMore(1);
    setFlag((flag) => !flag);
  };

  return (
    <Container className="galery-section">
      <div className="mb-5">
        <div className="yellow-separator mb-4"></div>
        <h4 className="mb-1 ff-circularBold">{firstTitle}</h4>
        <h4 className="fc-lightBlue mb-1 ff-circularBlack">{secondTitle}</h4>
      </div>
      <Row className="galery">
        <div className="col-12 d-flex justify-content-end">
          <select className="form-select order-by" onChange={handleSort}>
            <option value="relevant">Ordenar por relevancia</option>
            <option value="newer">Ordenar por más reciente</option>
            <option value="older">Ordenar por más antiguo</option>
          </select>
        </div>
        <div className={`${showFilterNav ? "col-3" : "col-1"}`}>
          <FilterDropdown
            categories={categories}
            handleChange={handleChange}
            show={showFilterNav}
            setShow={setShowFilterNav}
          />
        </div>
        <div className={`${showFilterNav ? "col-9" : "col-11"}`}>
          <div className="row shuffle-wrapper">
            {proyects[0] &&
              proyects.map((proyect, i) => (
                <div
                  ref={lastImage}
                  key={i + new Date().getTime}
                  data-position={i}
                  className={`shuffle-item ${
                    activeFilter.length > 0
                      ? "col-lg-4 col-6 mb-4"
                      : showMore * loadAmount.current >= i
                      ? "col-lg-4 col-6 mb-4"
                      : "no-load"
                  }`}
                  data-priority={proyect.PRIORIDAD}
                  data-created={proyect.AÑO}
                  data-groups={proyect.GROUPS}
                >
                  <div className="position-relative inner-box">
                    <div className="image">
                      <LazyLoadImage
                        src={`images/portfolioChimpa/${proyect.IMG_SRC}`}
                        className="img-fluid d-block img-portfolio"
                        alt={proyect.PROYECTO}
                        visibleByDefault={true}
                      />

                      {proyect.IMG_COUNTRY ? (
                        <img
                          src={`images/flags/${proyect.IMG_COUNTRY}`}
                          className="card-flag"
                          alt="Flag"
                        />
                      ) : (
                        <></>
                      )}
                      <div className="overlay-box">
                        {proyect.LINK === "No funciona" ||
                        proyect.LINK === "" ? (
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
                            <p className="ff-circularLight card-title">
                              {proyect.TITULO}
                            </p>
                            <div className="title-and-year">
                              <h5 className="ff-circularBold fc-lightBlue card-title-proyect">
                                {proyect.PROYECTO}
                              </h5>
                              <p className="ff-circularLight card-year">
                                {proyect.AÑO}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-12 d-flex justify-content-center">
            {activeFilter.length > 0 || inLast ? (
              <></>
            ) : (
              <button
                className="see-more"
                onClick={() => setShowMore(showMore + 1)}
              >
                Ver Más
              </button>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
}
export default DesktopGalery;
