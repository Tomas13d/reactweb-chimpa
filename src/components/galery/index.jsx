import { useEffect, useLayoutEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import AOS from "aos";
import jqueryMasonryGalery from "./galeryScript";
import galeryProyects from "../../utils/galery";
import "./galery.css";
import GaleryCard from "../galeryCard";

function Galery() {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [flag, setFlag] =useState(false);

  useEffect(() => {
    if (proyects[0]) {
      AOS.init({ once: true });
      jqueryMasonryGalery();
    }
  }, [flag]);

  useEffect(() => {
    if (galeryProyects) {
      const proyectCategories = [];
      const proyectCards = [];
      galeryProyects.forEach((singleProy, i) => {
        if (!proyectCategories.includes(singleProy.CATEGORIA)) proyectCategories.push(singleProy.CATEGORIA);
        proyectCards.push(<GaleryCard categoria={singleProy.CATEGORIA} img={singleProy.IMG_SRC} link={singleProy.LINK} proyecto={singleProy.PROYECTO} key={i+(new Date).getTime}/>);
      });
      setCategories(proyectCategories);
      setProyects(proyectCards);
      setFlag(!flag)
    }
  }, [galeryProyects]);

  return (
    <section className="portfolio ">
      <Container className="container">
        <Row className="mb-5 justify-content-center">
          <div className="col-10 text-center">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
              <label className="btn active">
                <input
                  type="radio"
                  name="shuffle-filter"
                  value="all"
                  checked="checked"
                />
                Todos
              </label>
              {categories[0] &&
                categories.map((category,i) => (
                  <label className="btn" key={i+(new Date).getTime}>
                    <input
                      type="radio"
                      name="shuffle-filter"
                      value={category}
                    />
                    {category}
                  </label>
                ))}
            </div>
          </div>
        </Row>
        <div className="row shuffle-wrapper portfolio-gallery">
          {proyects[0] && proyects}
        </div>
      </Container>
    </section>
  );
}

export default Galery;
