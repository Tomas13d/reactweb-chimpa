import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./filterDropdown.css";

function FilterDropdown({ handleChange, categories }) {
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setFilters(categories);
  }, [categories]);

  return (
    <div className="filter-cont col-2">
      <div onClick={() => setShow(true)}>
        <i class="bi bi-sliders filter-icon"></i>
      </div>

      <div className={`dropdown-custom ${show ? "show" : "hidden"}`}>
        <div className="filter-drop-header d-flex justify-content-between align-items-center">
          <h6 className="filter-header">Filtros</h6>
          <i
            class="bi bi-chevron-left close-icon"
            onClick={() => setShow(false)}
          ></i>
        </div>
        <hr className="line-separator" />

        <div className="filter-body">
          <h6 className="filter-by">Filtrar Por</h6>
          {Object.keys(filters).map((filterHeader, index) => (
            <>
              <h6 className="ff-circularBold category-header">
                {filterHeader}
              </h6>
              <Form className="inputs-cont">
                {filters["Tipos de Web"] &&
                  filters[filterHeader].map((category, i) => (
                    <Form.Group
                      key={`${filterHeader}_${i}`}
                      className="mb-3"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check
                        type="checkbox"
                        label={category === "all" ? "Todos" : category}
                        name="shuffle-filter"
                        className="custom-checkbox"
                        onChange={handleChange}
                        value={category}
                      />
                    </Form.Group>
                  ))}
              </Form>
              {index === Object.keys(filters).length - 1 ? (
                <></>
              ) : (
                <hr className="line-separator" />
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterDropdown;
