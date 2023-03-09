import { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../../utils/galery";
import FilterDropdown from "../desktop/filterDropdown";
import "./galeryMobile.css";

function GaleryMobile({ secondTitle }) {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [segmentedProjects, setSegmentedProjects] = useState([]);
  const [showMore, setShowMore] = useState(5);
  const [inLast, setInLast] = useState(false);
  const lastImage = useRef(null);

  useEffect(() => {
    if (showMore === 5) {
      setSegmentedProjects(proyects.slice(0, showMore));
    } else {
      if (showMore >= proyects.length - 1) {
        setSegmentedProjects(proyects);
      }
      setSegmentedProjects(
        segmentedProjects.concat(proyects.slice(showMore, showMore + 6))
      );
    }

    if (lastImage.current !== null && lastImage.current.dataset.position) {
      setInLast(parseInt(lastImage.current.dataset.position));
    }
  }, [showMore, proyects]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
    }
  }, [sortedJson]);

  const handleChange = () => {};

  console.log("more--->", showMore);
  console.log("proyects.length--->", proyects.length);
  console.log("position--->", inLast);

  return (
    <Container className="galery-section">
      <div className="mb-5 d-flex justify-content-center">
        <button className="btn-custom">Ver Proyectos</button>
      </div>

      <div className="col-12 d-flex justify-content-between aling-items-center">
        <FilterDropdown categories={categories} handleChange={handleChange} />
        <h6 className="ff-circularBold mobile-second-title">{secondTitle}</h6>
      </div>

      <div className="horizontal-galery-cont">
        {segmentedProjects.map((proyect, i) => (
          <div
            className={`mobile-galery-card`}
            ref={lastImage}
            data-position={i}
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
                Ver web <i class="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        ))}
        {inLast !== proyects.length - 1 ? (
          <div
            className={`see-more-card`}
            onClick={() => setShowMore(showMore + 5)}
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
