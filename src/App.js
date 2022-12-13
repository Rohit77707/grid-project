import React from "react";
import Ads from "./Component/Ads";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Navigation from "./Component/Navigation";
import Sidebar from "./Component/Sidebar";
import './App.css';
const App = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mid">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="navigation1">
            <Main />
          </div>
        </div>
        <div className="sidebar">
          <Ads />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
