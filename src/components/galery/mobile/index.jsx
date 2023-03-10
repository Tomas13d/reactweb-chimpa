import { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import FilterDropdown from "../desktop/filterDropdown";
import { filterProyects } from "../desktop/sortFunctions";
import "./galeryMobile.css";

function GaleryMobile({ secondTitle}) {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [segmentedProjects, setSegmentedProjects] = useState([]);
  const [activeFilter, setActiveFilters] = useState([]);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [showMore, setShowMore] = useState(5);
  const [inLast, setInLast] = useState(false);
  const lastImage = useRef(null);
  const amountOfCards= useRef(5) 

  useEffect(() => {
    if (showMore === 5) {
      setSegmentedProjects(proyects.slice(0, showMore));
    } else {
      if (showMore >= proyects.length ) {
        setSegmentedProjects(proyects);
      }
      setSegmentedProjects(
        segmentedProjects.concat(proyects.slice(showMore, showMore + amountOfCards.current))
      );
    }

    if (lastImage.current !== null && lastImage.current.dataset.position) {
      setInLast(parseInt(lastImage.current.dataset.position)+amountOfCards.current);
    }
  }, [showMore, proyects]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
    }
  }, [sortedJson]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    const filters = activeFilter;
    if (input.checked) {
      filters.push(input.value);
    } else {
      filters.splice(filters.indexOf(input.value), 1);
      
    }
    if (filters.length !== 0){
      const filteredProducts = filterProyects(proyects,filters)
      console.log("filtered -->", filteredProducts);
      setProyects(filteredProducts)
    } else {
      setProyects(sortedJson)
    }
    setInLast(false);
    setShowMore(5);
     
  };

  return (
    <Container className="galery-section">
      <div className="mb-5 d-flex justify-content-center">
        <button className="btn-custom">Ver Proyectos</button>
      </div>

      <div className="col-12 d-flex justify-content-between aling-items-center">
        <FilterDropdown categories={categories} handleChange={handleChange} show={showFilterNav} setShow={setShowFilterNav} mobileSize={true}/>
        <h6 className="ff-circularBold mobile-second-title">{secondTitle}</h6>
      </div>

      <div className="horizontal-galery-cont">
        {segmentedProjects.map((proyect, i) => (
          <div
            className={`mobile-galery-card`}
            ref={lastImage}
            data-position={i}
            key={i + new Date().getTime}
          >
            <img
              src={`images/portfolio/${proyect.IMG_SRC}`}
              alt={proyect.PROYECTO}
              className="mobile-galery-img"
            />
            <div className="mobile-galey-card-info">
              <h5 className="ff-circularBold fc-lightBlue">
                {proyect.PROYECTO}
              </h5>
              <p className="ff-circularLight">{proyect.TITULO}</p>
              <a href={proyect.LINK} className="fc-yellow ff-circularLight">
                Ver web <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        ))}
        {inLast !== proyects.length - 1 ? (
          <div
            className={`see-more-card`}
            onClick={() => setShowMore(showMore + amountOfCards.current)}
          >
            <p>Ver más proyectos</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}

export default GaleryMobile;
