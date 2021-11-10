import { useState } from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Slider } from "../slider/slider";
import './app.css';

export const App = () => {

  const [homePressed, setHomePressed] = useState(false);
  
  return (
    <div className='app' >
      <Header onClick={() => setHomePressed(true)} />
      <Slider 
        homePressed={homePressed}
        resetHomePressed={() => setHomePressed(false)} />
      <Footer />
    </div>
  );
};
