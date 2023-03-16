import React, { useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import "./filterDropdown.css";

function FilterDropdown({
  handleChange,
  categories,
  show,
  setShow,
  mobileSize,
}) {
  const menuDrop = useRef(null);

  useEffect(() => {
    if (mobileSize) {
      const handler = (e) => {
        if (!menuDrop.current.contains(e.target)) setShow(false);
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  });

  return (
    <div className="filter-cont sticky-column" ref={menuDrop}>
      <i
        className={`bi bi-sliders filter-icon ${show ? "no-show" : ""}`}
        onClick={() => setShow(true)}
      ></i>
      <div
        ref={menuDrop}
        className={`dropdown-custom ${show ? "show" : "hidden"} ${
          mobileSize ? "mobileSize" : "generalSize"
        }`}
      >
        <div className="filter-drop-header d-flex justify-content-between align-items-baseline">
          <div className="icon-and-header">
            <i
              className="bi bi-sliders inside-icon"
              onClick={() => setShow(false)}
            ></i>
            <h6 className="filter-header">Filtros</h6>
          </div>
          <i
            className="bi bi-chevron-left close-icon"
            onClick={() => setShow(false)}
          ></i>
        </div>
        <hr className="line-separator" />

        <div className="filter-body">
          <h6 className="filter-by">Filtrar Por</h6>
          {Object.keys(categories).map((filterHeader, index) => (
            <React.Fragment key={index + new Date().getTime}>
              <h6 className="ff-circularBold category-header">
                {filterHeader}
              </h6>
              <Form className="inputs-cont">
                {categories["Tipos de Web"] &&
                  categories[filterHeader].map((category, i) => (
                    <Form.Group
                      key={`${filterHeader}_${i}`}
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check
                        type="checkbox"
                        label={
                          category === "all"
                            ? "Todos"
                            : category.replaceAll("-", " ")
                        }
                        name="shuffle-filter"
                        className="custom-checkbox"
                        onChange={handleChange}
                        value={category}
                      />
                    </Form.Group>
                  ))}
              </Form>
              {index === Object.keys(categories).length - 1 ? (
                <></>
              ) : (
                <hr className="line-separator" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterDropdown;
