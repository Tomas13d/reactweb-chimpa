import { useEffect, useState } from "react";
import AOS from "aos";
import Shuffle from "shufflejs";
import { Container, Row } from "react-bootstrap";
import { sortedJson, allCategories } from "../../utils/galery";
import "./galery.css";

function Galery() {
  const [proyects, setProyects] = useState([]);
  const [categories, setCategories] = useState([""]);
  const [myShuffle, setMyShuffle] = useState();
  const [flag, setFlag] = useState(false);
  const [activeCategory, setActiveCategory] = useState();

  useEffect(() => {
    AOS.init({ once: true });
    const itemShuffle = new Shuffle(
      document.querySelector(".shuffle-wrapper"),
      {
        itemSelector: ".shuffle-item",
        buffer: 1,
      }
    );
    setMyShuffle(itemShuffle);
  }, [flag]);

  useEffect(() => {
    if (sortedJson) {
      setCategories(allCategories);
      setProyects(sortedJson);
      setFlag(!flag);
    }
  }, [sortedJson]);

  const handleChange = (e) => {
    const input = e.currentTarget;
    if (input.checked) {
      myShuffle.filter(input.value);
    }
  };
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <section className="portfolio ">
      <Container className="container">
        <Row className="mb-5 justify-content-center">
          <div className="col-10 text-center">
            <div className="btn-group btn-group-toggle " data-toggle="buttons">
              {categories[0] &&
                categories.map((category, i) => (
                  <label className="btn" key={i + new Date().getTime}>
                    <input
                      type="radio"
                      name="shuffle-filter"
                      value={category}
                      onChange={handleChange}
                    />
                    {category === "all" ? "Todos" : category }
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
                      src={`${proyect.IMG_SRC}${getRandomInt(1, 9)}.jpg`}
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
                          <p>{proyect.CATEGORIA}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}

export default Galery;
