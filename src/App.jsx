import "./App.css";
import Header from "./components/header";
import NavbarApp from "./components/navbar";

function App() {
  return (
    <>
      <NavbarApp />
      <Header
        deskTopText="Construimos tu negocio en la web"
        mobileText="Hacemos monerías, pero no tiramos frutas"
        headerClass="desarrollo-web"
      />
    </>
  );
}

export default App;
