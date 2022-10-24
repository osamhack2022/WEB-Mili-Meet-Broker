import Keycloak from "keycloak-js";
import React from "react";
import Login from "./pages/loginPage";
import App from './App'

function Index() {
  
const keycloak = Keycloak('/keycloak.json');

  return (
  <>
  <App />
  </>
  )
}

export default Index;
