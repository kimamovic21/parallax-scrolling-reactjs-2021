import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ImageOne from "./components/ImageOne";
import ImageThree from "./components/ImageThree";
import ImageTwo from "./components/ImageTwo";
import TextBox from "./components/TextBox";

function App() {
  return (
    <div>
      <ParallaxProvider>
        <ImageOne />
        <TextBox />
        <ImageTwo />
        <TextBox />
        <ImageThree />
      </ParallaxProvider>
    </div>
  );
}

export default App;
