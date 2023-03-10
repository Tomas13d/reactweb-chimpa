import "@dotlottie/player-component";
import cohete from "../../assets/lotties/cohete.lottie";
import ButtonIllustration from "../../assets/illustrations/ButtonIllustration";
import "./rocket.css";
import { useRef, useState } from "react";

function Rocket() {
    const[startAnimation, setStartAnimation] = useState(true)
    const interval= useRef(1)

  const subirCohete = () => {
    let cohete = document.getElementById("cohete-form");
    let form = document.getElementById("form-contact");
    let coheteContianer = document.querySelector(".container-cohete-form");
    let heightCohete = cohete.offsetHeight;
    let heightTransform = 0;
    let change = true;
    if (startAnimation) {
      setInterval(() => {
        if (heightTransform < heightCohete) {
          if (heightTransform < 30) {
            heightTransform++;
          } else {
            if (change) {
              interval.current = 1;
              change = false;
            }
            heightTransform += 2;
          }
        }
        coheteContianer.style.transform = `translate(0,-${heightTransform}px)`;
      }, 0);
    }
    setStartAnimation(false);
    form.style.height = "auto";
  };

  return (
    <section id="form" className="pb-0 pt-100">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 d-flex flex-column align-items-center align-self-end">
            <h3 className="text-center mb-5">
              ¿Listo para evolucionar en la jungla digital?
            </h3>
            <button onClick={()=> subirCohete()} className="mb-5 btn-power ">
              <ButtonIllustration />
            </button>
          </div>
        </div>
        <div className="container-form-cohete2" style={{ overflow: "hidden" }}>
          <div className="container-cohete-form">
            <div className="col-md-12 d-flex flex-column align-items-center cohete-form-container">
              <dotlottie-player
                id="cohete-form"
                autoplay
                loop
                mode="normal"
                src={cohete}
                background="transparent"
                speed="1"
                style={{ width: "910px", height: "auto", zIndex: 1 }}
                className="rocket"
              ></dotlottie-player>
            </div>
            <div
              className="row d-flex justify-content-center content-form"
              id="form-contact"
            >
              <div className="col-md-8 bg-form">
                <div className="d-none d-md-flex align-items-baseline justify-content-center">
                  <img
                    loading="lazy"
                    width="19.738"
                    height="19.733"
                    src="images/icon-arrow-form.svg" alt="arrow"/>
                  <h3 className="fc-darkBlue-01 fs-32 text-center ms-2">
                    Dejanos tu mensaje o inquietud
                  </h3>
                </div>
                <p className="fs-18 ff-circularBook fc-darkBlue-01 text-center mb-4 mt-0 mt-md-3 mt-md-0 d-none d-md-block">
                  (Leemos atentamente, esto no es un bot)
                </p>
                <div className="d-none d-md-flex justify-content-center mb-4">
                  <a href="mailto:contacto@chimpancedigital.com.ar">
                    <div className="d-flex me-4">
                      <svg
                        className="mx-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.33"
                        height="17.376"
                        viewBox="0 0 23.33 17.376"
                        style={{ verticalAlign: "sub" }}
                      >
                        <path
                          id="envelope-line"
                          d="M23.872,6H3.458A1.453,1.453,0,0,0,2,7.448V21.929a1.453,1.453,0,0,0,1.458,1.448H23.872a1.453,1.453,0,0,0,1.458-1.448V7.448A1.453,1.453,0,0,0,23.872,6ZM22.749,21.929H4.668l5.1-5.242L8.722,15.68,3.458,21.089V8.549L12.52,17.5a1.465,1.465,0,0,0,2.056,0l9.3-9.181v12.67l-5.366-5.329-1.028,1.021ZM4.413,7.448H22.691l-9.142,9.029Z"
                          transform="translate(-2 -6)"
                          fill="#0075a9"
                        ></path>
                      </svg>
                      <p className="fc-darkBlue-01 mb-0">
                        contacto@chimpancedigital.com.ar
                      </p>
                    </div>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="d-block d-md-none"
                    href="https://api.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web"
                  >
                    <div className="d-flex ms-4">
                      <img
                        loading="lazy"
                        src="images/icon-phone-form.svg"
                        width="21.847"
                        height="21.839"
                        className="me-3"
                        alt="phone"
                      />
                      <p className="fc-darkBlue-01 mb-0">351 650-3470</p>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="d-none d-md-block"
                    href="https://web.whatsapp.com/send?phone=+5493516503470&amp;text=Buenos%20días,%20quiero%20mas%20info%20sobre%20desarrollo%20web"
                  >
                    <div className="d-flex ms-4">
                      <img
                        alt="icon-phone"
                        src="images/icon-phone-form.svg"
                        width="21.847"
                        height="21.839"
                        className="me-3"
                      />
                      <p className="fc-darkBlue-01 mb-0">351 650-3470</p>
                    </div>
                  </a>
                </div>
                <div className="bg-form-input">
                  <form
                    action=""
                    id="form-cohete"
                    method="post"
                    style={{ height: "auto" }}
                  >
                    <div className="input-group input-group-lg mb-4 position-relative">
                      <span
                        className="input-group-text d-block d-md-none"
                        id="basic-addon1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15.089"
                          height="19.545"
                          viewBox="0 0 15.089 19.545"
                          style={{ verticalAlign: "sub" }}
                        >
                          <path
                            id="user"
                            d="M19.222,14.467l-2.986-1.927,1.125-2.049a3.249,3.249,0,0,0,.4-1.56V5.686a4.592,4.592,0,0,0-9.185,0V8.93a3.25,3.25,0,0,0,.4,1.56L10.1,12.54,7.118,14.467A3.241,3.241,0,0,0,5.625,17.2V20.67H20.714V17.2a3.241,3.241,0,0,0-1.492-2.731Zm.18,4.9H6.937V17.2a1.944,1.944,0,0,1,.9-1.639l4-2.585L10.13,9.866a1.95,1.95,0,0,1-.24-.936V5.686a3.28,3.28,0,0,1,6.56,0V8.93a1.95,1.95,0,0,1-.24.936L14.5,12.974l4,2.585a1.944,1.944,0,0,1,.9,1.639Z"
                            transform="translate(-5.625 -1.125)"
                            fill="#0075a9"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Nombre y Apellido"
                        required
                      />
                    </div>
                    <div className="input-group input-group-lg mb-4 position-relative">
                      <span
                        className="input-group-text d-block d-md-none"
                        id="basic-addon1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.33"
                          height="17.376"
                          viewBox="0 0 23.33 17.376"
                          style={{ verticalAlign: "sub" }}
                        >
                          <path
                            id="envelope-line"
                            d="M23.872,6H3.458A1.453,1.453,0,0,0,2,7.448V21.929a1.453,1.453,0,0,0,1.458,1.448H23.872a1.453,1.453,0,0,0,1.458-1.448V7.448A1.453,1.453,0,0,0,23.872,6ZM22.749,21.929H4.668l5.1-5.242L8.722,15.68,3.458,21.089V8.549L12.52,17.5a1.465,1.465,0,0,0,2.056,0l9.3-9.181v12.67l-5.366-5.329-1.028,1.021ZM4.413,7.448H22.691l-9.142,9.029Z"
                            transform="translate(-2 -6)"
                            fill="#0075a9"
                          />
                        </svg>
                      </span>
                      <input
                        type="mail"
                        className="form-control"
                        id="mail"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="input-group input-group-lg mb-4 position-relative">
                      <span
                        className="input-group-text d-block d-md-none"
                        id="basic-addon1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xlink="http://www.w3.org/1999/xlink"
                          width="19"
                          height="19.012"
                          viewBox="0 0 19 19.012"
                          style={{ verticalAlign: "sub" }}
                        >
                          <defs>
                            <clipPath id="clip-path">
                              <rect
                                id="Rectángulo_4335"
                                data-name="Rectángulo 4335"
                                width="19"
                                height="19.012"
                                fill="#005081"
                              />
                            </clipPath>
                          </defs>
                          <g
                            id="Grupo_5255"
                            data-name="Grupo 5255"
                            transform="translate(-3.358 -2.944)"
                          >
                            <g
                              id="Grupo_4709"
                              data-name="Grupo 4709"
                              transform="translate(3.358 2.944)"
                              clip-path="url(#clip-path)"
                            >
                              <path
                                id="Trazado_17770"
                                data-name="Trazado 17770"
                                d="M14.245,19.012a9.542,9.542,0,0,1-2.489-.582,17.449,17.449,0,0,1-5-2.956A21.559,21.559,0,0,1,1.527,9.311,12.475,12.475,0,0,1,.1,5.558C.062,5.351.041,5.14.009,4.932a.981.981,0,0,1,.167-.638A13.7,13.7,0,0,1,2.137,1.645,17.348,17.348,0,0,1,3.56.3,1.107,1.107,0,0,1,5.266.547,22.583,22.583,0,0,1,7.631,4.423a4.916,4.916,0,0,1,.216.614.955.955,0,0,1-.2.962c-.228.254-.486.482-.737.714-.174.161-.354.317-.542.462a.212.212,0,0,0-.074.286,8.64,8.64,0,0,0,3.2,4.191,8.525,8.525,0,0,0,2.047,1.061.215.215,0,0,0,.286-.072q.329-.408.682-.8a4.958,4.958,0,0,1,.523-.509.905.905,0,0,1,.911-.18,8.19,8.19,0,0,1,1.357.581c1.036.615,2.046,1.276,3.06,1.927a1.246,1.246,0,0,1,.354.34,1.012,1.012,0,0,1,.052,1.347,8.231,8.231,0,0,1-1.406,1.522,14.574,14.574,0,0,1-2.654,1.955,3.37,3.37,0,0,1-.464.185M4.282,1.3c-.066.055-.1.079-.125.1A17.857,17.857,0,0,0,1.465,4.531a.871.871,0,0,0-.139.716A10.925,10.925,0,0,0,2.516,8.479a20.311,20.311,0,0,0,7.469,7.709,10.788,10.788,0,0,0,4.021,1.521.427.427,0,0,0,.289-.065c.716-.538,1.441-1.067,2.13-1.639.453-.377.851-.82,1.286-1.245-.1-.078-.165-.133-.234-.183a23.349,23.349,0,0,0-3.5-2.081.312.312,0,0,0-.456.094c-.384.451-.791.884-1.187,1.325a.574.574,0,0,1-.636.165,8.847,8.847,0,0,1-2.931-1.39A9.606,9.606,0,0,1,5.023,7.616c-.236-.753-.281-.6.306-1.2.365-.37.776-.695,1.17-1.035a.181.181,0,0,0,.053-.266c-.43-.778-.837-1.57-1.285-2.337-.295-.5-.646-.977-.985-1.485"
                                transform="translate(0 0)"
                                fill="#005081"
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Teléfono"
                        required
                      />
                    </div>
                    <div
                      className="custom-select input-group input-group-lg mb-4 position-relative"
                      id="select2"
                    >
                      <span
                        className="input-group-text d-block d-md-none"
                        id="basic-addon1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.65"
                          height="19.447"
                          viewBox="0 0 23.65 19.447"
                        >
                          <g
                            id="hand-index"
                            transform="translate(23.65) rotate(90)"
                          >
                            <path
                              id="Trazado_3883"
                              data-name="Trazado 3883"
                              d="M6.1,1.478A1.105,1.105,0,0,0,5,2.587V13.3a.734.734,0,1,1-1.468,0V11.988l-1.472.3a.738.738,0,0,0-.586.807l.506,4.589a2.227,2.227,0,0,0,.357.985l2.1,3.178a.733.733,0,0,0,.611.33h9.372a.733.733,0,0,0,.637-.373l2.048-3.61a3.713,3.713,0,0,0,.465-1.465l.4-4.013a1.485,1.485,0,0,0-.372-1.139,1.463,1.463,0,0,0-1.089-.487h-.5v1.478a.734.734,0,1,1-1.468,0v-1.99q-.139-.2-.294-.384a2.368,2.368,0,0,0-.713-.636A2.8,2.8,0,0,0,12.494,9.5l-.155.014v2.314a.734.734,0,1,1-1.468,0V8.848a.508.508,0,0,0-.22-.464,2.423,2.423,0,0,0-.658-.269,6.087,6.087,0,0,0-1.2-.04L8.67,8.08v3.745a.734.734,0,1,1-1.468,0V2.587A1.105,1.105,0,0,0,6.1,1.478ZM8.668,6.6V2.587a2.569,2.569,0,1,0-5.138,0V10.48l-1.76.355A2.215,2.215,0,0,0,.014,13.253L.52,17.845a3.711,3.711,0,0,0,.594,1.641l2.1,3.178a2.2,2.2,0,0,0,1.833.987h9.372a2.2,2.2,0,0,0,1.911-1.117l2.048-3.608a5.2,5.2,0,0,0,.652-2.053l.4-4.013a2.969,2.969,0,0,0-.744-2.278,2.927,2.927,0,0,0-2.177-.973h-.854q-.138-.188-.286-.367a3.625,3.625,0,0,0-1.292-1.058,4.04,4.04,0,0,0-1.7-.16l-.194.018a1.859,1.859,0,0,0-.822-.949,3.85,3.85,0,0,0-1.083-.426A7.216,7.216,0,0,0,8.739,6.6l-.07,0ZM11.743,9.595Z"
                              transform="translate(0)"
                              fill="#0075a9"
                              fill-rule="evenodd"
                            />
                          </g>
                        </svg>
                      </span>
                      <textarea
                        name="message"
                        id="message"
                        className="bg-transparent border-0 form-control p-0"
                        cols="30"
                        rows="4"
                        placeholder="Dejanos tu consulta"
                      ></textarea>
                      {/*  <select className="form-select" name="service" id="service">
                                         <option selected>Elegí el Servicio</option>
                                         <option value="1">UX</option>
                                         <option value="2">UI</option>
                                         <option value="3">WEB</option>
                                         <option value="4">Branding</option>
                                         <option value="5">MKT Digital</option>
                                         <option value="6">Leads</option>
                                     </select>  */}
                    </div>
                    <div className="d-grid gap-2 pt-3">
                      <button type="submit" className="btn btn-send">
                        Enviar
                        <svg
                          className="ms-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                        >
                          <path
                            id="send"
                            d="M19.122,11.447,5.388,4.571a.618.618,0,0,0-.88.7L6.355,12,4.483,18.717a.636.636,0,0,0,.905.719L19.122,12.56a.625.625,0,0,0,0-1.112ZM6.075,17.7l1.379-5.07h5.768v-1.25H7.454L6.075,6.309,17.442,12Z"
                            transform="translate(-4.461 -4.505)"
                            fill="#fff"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                  <div
                    id="contact_form"
                    className="d-flex justify-content-center"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="box-form"></div>
      </div>
    </section>
  );
}

export default Rocket;
