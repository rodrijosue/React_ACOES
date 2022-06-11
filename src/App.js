import React from "react";
import Aside from "./components/Aside";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Aside></Aside>
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}
