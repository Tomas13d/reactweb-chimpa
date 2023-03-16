import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import FilterDropdown from "../filterDropdown";
import { filterProyectsByTags } from "../sortFunctions";
import { proyectJson, allCategories } from "../../../utils/galery";
import "./galeryMobile.css";

function GaleryMobile({ secondTitle }) {
  const [proyects, setProyects] = useState([]);
  const [allProyects, setAllProyects] = useState([]);
  const [segmentedProjects, setSegmentedProjects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [showFilterNav, setShowFilterNav] = useState(false);
  const [activeFilter, setActiveFilters] = useState([]);
  const [showMore, setShowMore] = useState(5);
  const loadAmount = useRef(5);

  useEffect(() => {
    if (proyectJson) {
      setProyects(proyectJson);
      setAllProyects(proyectJson);
    }
    if (allCategories) setCategories(allCategories);
  }, []);

  useEffect(() => {
    setSegmentedProjects(
      showMore === 5
        ? proyects.slice(0, showMore)
        : showMore >= proyects.length
        ? proyects
        : segmentedProjects.concat(
            proyects.slice(showMore, showMore + loadAmount.current)
          )
    );
  }, [proyects, showMore]);

  const handleChange = (e) => {
    const filters = activeFilter;
    e.currentTarget.checked
      ? filters.push(e.currentTarget.value)
      : filters.splice(filters.indexOf(e.currentTarget.value), 1);
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
          <div className={`mobile-galery-card`} key={i + new Date().getTime}>
            <img
              src={`images/portfolio/${proyect.IMG_SRC}`}
              alt={proyect.PROYECTO}
              className="mobile-galery-img"
              loading="lazy"
            />
            <div className="mobile-galey-card-info">
              <h5 className="ff-circularBold fc-lightBlue proyect-title-mobile">
                {proyect.PROYECTO}
              </h5>
              <p className="ff-circularLight card-title-mobile">{proyect.TITULO}</p>
              {proyect.LINK === "No funciona" || proyect.LINK === "" ? (
                <></>
              ) : (
                <a href={proyect.LINK} className="fc-yellow ff-circularLight link-card-mobile">
                  Ver web <i className="bi bi-chevron-right icon-link"></i>
                </a>
              )}
            </div>
          </div>
        ))}
        {segmentedProjects.length !== proyects.length ? (
          <div
            className={`see-more-card`}
            onClick={() => setShowMore(showMore + loadAmount.current)}
          >
            <p className="ff-circularLight see-more-text">Ver más proyectos</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}

export default GaleryMobile;
