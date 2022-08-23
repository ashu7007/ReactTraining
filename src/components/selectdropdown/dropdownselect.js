import React from "react";
import Select from "react-select";


const countries = [
    {label:"India"},
    {label:"USA"},
    {label:"Newzealand"},
    {label:"Japan"},
]

var SelectDropDown = () => {

    return <div style={{marginLeft: "35%",marginTop: "1%",marginRight: "35%"}}>
        <h2>Select country</h2>
        <Select options={countries}></Select>
        </div>
}

export default SelectDropDown;