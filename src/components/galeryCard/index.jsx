function GaleryCard({ categoria, proyecto, link, img, i }) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return (
    <div key={i}
      className="col-lg-4 col-6 mb-4 shuffle-item"
      data-groups={`[${categoria}]`}
    >
      <div className="position-relative inner-box">
        <div className="image position-relative ">
          <img src={`${img}${getRandomInt(1,9)}.jpg`} alt={proyecto} className="img-fluid w-100 d-block" />
          <div className="overlay-box">
            <a className="portfolio-image popup-gallery" href={link}>
              <i className="bi bi-arrow-up-right"></i>
            </a>
            <div className="overlay-inner">
              <div className="overlay-content">
                <h5 className="mb-0">{proyecto}</h5>
                <p>{categoria}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleryCard;
