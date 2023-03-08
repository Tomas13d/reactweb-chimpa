import { useEffect, useState } from "react";
import AOS from "aos";
import Shuffle from "shufflejs";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import FilterDropdown from "./filterDropdown";
import "./galeryDesktop.css";
import { sortByDate, sortByPriority } from "./sortFunctions";

function Galery({ sectionTitle }) {
  const [proyects, setProyects] = useState([]);
  const [segmentedProjects, setSegmentedProjects] = useState([])
  const [showMore, setShowMore] = useState(1)
  const [categories, setCategories] = useState([""]);
  const [activeFilter, setActiveFilters] = useState([]);
  const [show, setShow] = useState(false);
  const [shuffleRef, setShuffleRef] = useState();
  const [lastImage, setLastImage] = useState(false)

  useEffect(() => {
    AOS.init({ once: true });
    const shuffle = new Shuffle(document.querySelector(".shuffle-wrapper"), {
      itemSelector: ".shuffle-item",
      buffer: 1,
    });
    setShuffleRef(shuffle);
  }, []);

  useEffect(()=>{
      if(shuffleRef){
        shuffleRef.layout();
      }
  },[showMore, activeFilter])
 
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
    if(input.checked){
      filters.push(input.value)
      setShowMore(999)
    } else {
      filters.splice(filters.indexOf(input.value), 1);
      filters.length !== 0 ? setShowMore(999) : setShowMore(1)
    }
      setActiveFilters(filters)
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
    setShowMore(1)
  };


  return (
    <Container className="galery-section">
      <div className="mb-5">
        <div className="yellow-separator mb-4"></div>
        <h5 className="mb-1 ff-circularBold">{sectionTitle}</h5>
        <h5 className="fc-lightBlue mb-1 ff-circularBold">Nuestros Proyectos</h5>
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
        <div className="col-2">
          <FilterDropdown categories={categories} handleChange={handleChange} />
        </div>
        <div className="col-10">
          <div className="row shuffle-wrapper">
            {proyects[0] &&
              proyects.map((proyect, i) => (
                <div
                  key={i + new Date().getTime}
                  className={`shuffle-item ${activeFilter.length > 0 ? "col-lg-4 col-6 mb-4" : showMore*20 >= i ? "col-lg-4 col-6 mb-4": "no-load"}`}
                  data-priority={proyect.PRIORIDAD}
                  data-created={proyect.AÑO}
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
          <div className="col-12 d-flex justify-content-center">
            {activeFilter.length > 0 ? (
              <></>
            ) : (
              <button className="see-more" onClick={()=> setShowMore(showMore+1)}>Ver Más</button>
            )}
            
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Galery;

/*
 */
