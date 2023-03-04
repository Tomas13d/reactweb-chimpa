import NavbarApp from "./components/navbar";
import Header from "./components/header";
import "./App.css";
import Galery from "./components/galery";
import { useEffect, useState } from "react";


function App() {
  
  return (
    <>
      <NavbarApp />
      <Header
        deskTopText="Construimos tu negocio en la web"
        mobileText="Hacemos monerías, pero no tiramos frutas"
        headerClass="desarrollo-web"
      />
      <Galery/>
    </>
  );
}

export default App;
