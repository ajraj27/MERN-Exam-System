import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import FormComponent from '../src/components/FormComponent/FormComponent';
import Acknowledgment from "../src/components/Acknowledgement/Acknowledgment";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
                <Route exact path="/" component={FormComponent} />
                <Route exact path="/acknowledgement" component={Acknowledgment} />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
