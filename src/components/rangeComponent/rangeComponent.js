import React from "react";


var RangeComponent = () => {

    return <div style={{marginLeft: "30%",marginTop: "1%",marginRight: "35%"}}>
        <h2>Salary :</h2>
        <input type="range" id="sal" name="sal" min="20000" max="500000"></input>
        </div>
}

export default RangeComponent;