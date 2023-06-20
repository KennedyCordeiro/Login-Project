import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/auth";
import "./App.css"
const App = () => {
  return (
    <AuthProvider>
      <RoutesApp id="zero"/>
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
