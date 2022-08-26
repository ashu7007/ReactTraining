import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import form from './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import InputComponent from './components/inputtext/Inputtext';
// import DateofBirth from './components/currentdate/currentdate'
// import RadioComp from './components/radioComponent/radioComponent'
// import SelectDropDown from './components/selectdropdown/dropdownselect'
// import InputFile  from './components/inputfile/inputfile'
// import PasswordComponent from './components/passwordFieldComponent/passwordField'
// import RangeComponent from './components/rangeComponent/rangeComponent'
import RegisterComponent from './components/RegisterComponent/registerForm'
import TableComponent from './components/tableComponent/tableComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));


const countries = [
  {label:"India"},
  {label:"USA"},
  {label:"Newzealand"},
  {label:"Japan"},
]
const education = [
  {label:"PD"},
  {label:"PG"},
  {label:"UG"},
  {label:"Diploma"},
]

let formCss = {
  border: '3px solid LightBlue',
  marginLeft: "25%",
  marginTop: "5%",
  marginBottom: "5%",
  marginRight: "25%",

}

const listItem= [];
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RegisterComponent></RegisterComponent>
    {/* <TableComponent item={listItem}></TableComponent> */}
    {/* <InputComponent labelName="Name"></InputComponent>
    <InputComponent labelName="Email"></InputComponent>
    <DateofBirth></DateofBirth>
    <RadioComp></RadioComp>
    <InputFile></InputFile>
    <SelectDropDown name="level of education" options={education}></SelectDropDown>
    <PasswordComponent name="Password" ></PasswordComponent>
    <PasswordComponent name="Confirm Password"></PasswordComponent> */}
    {/* <RangeComponent></RangeComponent> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
