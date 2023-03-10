import { useEffect, useRef, useState } from "react";
import { Container} from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import FilterDropdown from "../filterDropdown";
import { filterProyectsByTags } from "../sortFunctions";
import "./galeryMobile.css";

function GaleryMobile({ secondTitle }) {
  const [proyects, setProyects] = useState([]);
  const [allProyects, setAllProyects] = useState([]);
  const [segmentedProjects, setSegmentedProjects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [activeFilter, setActiveFilters] = useState([]);
  const [showMore, setShowMore] = useState(5);
  const amountOfCards = useRef(5);

  useEffect(() => {
    showMore === 5
      ? setSegmentedProjects(proyects.slice(0, showMore))
      : showMore >= proyects.length
      ? setSegmentedProjects(proyects)
      : setSegmentedProjects(
          segmentedProjects.concat(
            proyects.slice(showMore, showMore + amountOfCards.current)
          )
        );
  }, [proyects, showMore]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
      setAllProyects(sortedJson);
    }
  }, [sortedJson]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    const filters = activeFilter;
    input.checked
      ? filters.push(input.value)
      : filters.splice(filters.indexOf(input.value), 1);
    setActiveFilters(filters);
    filters.length !== 0
      ? setProyects(filterProyectsByTags(allProyects, filters))
      : setProyects(allProyects);
    setShowMore(5);
  };

  return (
    <Container className="galery-section">
      <div className="mb-5 d-flex justify-content-center">
        <button className="btn-custom">Ver Proyectos</button>
      </div>

      <div className="col-12 d-flex justify-content-between aling-items-center">
        <FilterDropdown
          categories={categories}
          handleChange={handleChange}
          show={showFilterNav}
          setShow={setShowFilterNav}
          mobileSize={true}
        />
        <h6 className="ff-circularBold mobile-second-title">{secondTitle}</h6>
      </div>

      <div className="horizontal-galery-cont">
        {segmentedProjects.map((proyect, i) => (
          <div
            className={`mobile-galery-card`}
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
        {segmentedProjects.length !== proyects.length ? (
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
