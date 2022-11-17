import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import React from "react";
import TopMenus from "./components/TopMenus";
import CateLinks from "./components/CateLinks";
import Contents from "./components/Contents";
import Footer from "./components/Footer";
import TopLink from "./components/TopLink";

// const TopLink = () => {
//   return <a name="top"></a>;
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <a name="top"></a> */}
        <TopLink />
        <TopMenus />
        <CateLinks />
        <Contents />
        <Footer />
        <TopLink />
      </header>
    </div>
  );
}

export default App;
