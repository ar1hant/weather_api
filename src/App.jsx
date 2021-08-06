import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Form from "./components/form";
import Weather from "./components/weather";

import Theme from "./components/theme";
// import {useState} from 'react';
// import {useEffect} from 'react';

import {useSelector} from "react-redux";

function App(){
  const theme = useSelector((state) => state.theme);
  // console.log(theme);
  return(
    <div className={theme ? "App dark" : "App"}>
      <Theme />
      <Form />
      <Weather />
    </div>
  )
}

export default App;