import NavbarApp from "./components/navbar";
import Header from "./components/header";
import "./App.css";
import Galery from "./components/galery/desktop";
import FilterDropdown from "./components/galery/desktop/filterDropdown";

function App() {
  return (
    <>
      <FilterDropdown/>
    {/*   <NavbarApp />
      <Header
        deskTopText="Hacemos monerías, pero no tiramos frutas"
        mobileText="Hacemos monerías, pero no tiramos frutas"
        headerClass="proyectos"
      />
      <Galery sectionTitle={"Hacemos monerías, pero no tiramos frutas"} /> */}
    </>
  );
}

export default App;
