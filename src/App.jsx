import NavbarApp from "./components/navbar";
import Header from "./components/header";
import Galery from "./components/galery";
import FooterMobile from "./components/footerMobile";

function App() {
  return (
    <>
      <NavbarApp />
      <Header
        deskTopText="Construimos tu negocio en la web"
        mobileText="Hacemos monerías, pero no tiramos frutas"
        headerClass="proyectos"
      />
      <Galery firstTitle={"Hacemos monerías, pero no tiramos frutas"} secondTitle={"Más de 80 proyectos web."}/> 
      <FooterMobile/>
    </>
  );
}

export default App;
