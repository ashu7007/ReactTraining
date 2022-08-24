import React from "react";
import Select from "react-select";


var SelectDropDown = (props) => {

    return <div style={{marginLeft: "30%",marginTop: "1%",marginRight: "35%"}}>
        <h4>{props.name}</h4>
        <Select options={props.options}></Select>
        </div>
}

export default SelectDropDown;