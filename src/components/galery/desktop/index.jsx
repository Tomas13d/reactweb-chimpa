import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Shuffle from "shufflejs";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import FilterDropdown from "./filterDropdown";
import "./galeryDesktop.css";
import { sortByDate, sortByPriority } from "./sortFunctions";

function DesktopGalery({ firstTitle, secondTitle }) {
  const [proyects, setProyects] = useState([]);
  const [showMore, setShowMore] = useState(1);
  const [categories, setCategories] = useState([""]);
  const [activeFilter, setActiveFilters] = useState([]);
  const [show, setShow] = useState(false);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [shuffleRef, setShuffleRef] = useState();
  const [inLast, setInLast] = useState(false);
  const lastImage = useRef(null);

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
      shuffleRef.layout();
    }
    if (
      lastImage.current !== null &&
      !lastImage.current.classList.contains("no-load") &&
      parseInt(lastImage.current.dataset.position) === proyects.length - 1
    ) {
      setInLast(true);
    }
  }, [showMore, activeFilter]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
    }
  }, [sortedJson]);

  useEffect(() => {
    if (shuffleRef) {
      shuffleRef.resetItems();
    }
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
    let options;
    switch (value) {
      case "newer":
        options = {
          reverse: true,
          by: sortByDate,
        };
        break;
      case "older":
        options = {
          reverse: false,
          by: sortByDate,
        };
        break;
      case "relevant":
        options = {
          by: sortByPriority,
        };
        break;

      default:
        options = {};
    }
    shuffleRef.sort(options);
    setShowMore(1);
  };

  return (
    <Container className="galery-section">
      <div className="mb-5">
        <div className="yellow-separator mb-4"></div>
        <h4 className="mb-1 ff-circularBold">{firstTitle}</h4>
        <h4 className="fc-lightBlue mb-1 ff-circularBold">{secondTitle}</h4>
      </div>
      <Row className="galery">
        <div className="col-12 d-flex justify-content-end">
          <div className="dropdown">
            <button
              className="dropdown-toggle order-by"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setShow(!show)}
            >
              Ordenar Por
            </button>
            <div
              className={`dropdown-menu menu-options ${show ? "show" : ""}`}
              aria-labelledby="dropdownMenuButton"
            >
              <option
                className="dropdown-item custon-drop-item"
                value="relevant"
                onClick={handleSort}
              >
                Más Relevante
              </option>
              <option
                className="dropdown-item custon-drop-item"
                value="newer"
                onClick={handleSort}
              >
                Más Reciente
              </option>
              <option
                className="dropdown-item custon-drop-item"
                value="older"
                onClick={handleSort}
              >
                Más Antiguo
              </option>
            </div>
          </div>
        </div>
        <div className={`${showFilterNav ? "col-3" : "col-1"}`}>
          <FilterDropdown categories={categories} handleChange={handleChange} show={showFilterNav} setShow={setShowFilterNav}/>
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
                      : showMore * 20 >= i
                      ? "col-lg-4 col-6 mb-4"
                      : "no-load"
                  }`}
                  data-priority={proyect.PRIORIDAD}
                  data-created={proyect.AÑO}
                  data-groups={JSON.stringify(proyect.CATEGORIA.concat(proyect.LENGUAJE,proyect.CARACTERISTICAS))}
                >
                  <div className="position-relative inner-box">
                    <div className="image position-relative ">
                      <img
                        src={`images/portfolio/${proyect.IMG_SRC}`}
                        alt={proyect.PROYECTO}
                        className="img-fluid d-block img-portfolio"
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

/*
 */
