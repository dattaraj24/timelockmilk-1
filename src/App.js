import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

function App() {
  function detectMobile() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    return toMatch.some(toMatchItem => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(detectMobile());
    setIsMobile(detectMobile());
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
