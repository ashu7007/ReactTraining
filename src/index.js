import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NameForm from './components/inputtext/Inputtext';
import DateofBirth from './components/currentdate/currentdate'
import RadioComp from './components/radioComponent/radioComponent'
import SelectDropDown from './components/selectdropdown/dropdownselect'
import InputFile  from './components/inputfile/inputfile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <form>
    <h1 style={{marginLeft: "35%",color:'blueviolet'}}>User Form</h1>
    <NameForm></NameForm>
    <InputFile></InputFile>
    <DateofBirth></DateofBirth>
    <SelectDropDown></SelectDropDown>
    <RadioComp></RadioComp>
    <input  style={{marginLeft: "35%",marginTop: "1%"}} type="submit" value="Submit" />
    </form>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
