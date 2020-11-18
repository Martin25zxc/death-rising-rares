import React from "react";
import "./styles/App.css";
import Layout from "./Layout";
import MainPage from "../pages/MainPage";
function App() {
  return (
    <React.Fragment>
      <Layout>
        <MainPage />
      </Layout>
    </React.Fragment>
  );
}

export default App;
