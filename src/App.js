// Design :  App.js have a container with a two column
// left column has 5 components
// right column has photo
import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Photo from "./Components/Photo/Photo";
//import Form from "./Components/Form/Form";

function App() {
  return (
    <div className="Box">
      <Layout />
      <Photo />
      {/* <Form /> */}
    </div>
  );
}

export default App;
