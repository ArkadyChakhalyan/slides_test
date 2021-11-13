import { useState } from "react";
import { Header } from "../header/header";
import { Slider } from "../slider/slider";
import './app.scss';

export const App = () => {

  const [homePressed, setHomePressed] = useState(false);
  
  return (
    <div className='app' >
      <Header onClick={() => setHomePressed(true)} />
      <Slider 
        homePressed={homePressed}
        resetHomePressed={() => setHomePressed(false)} />
    </div>
  );
};
