import React, {useState} from "react";

const PasswordComponent = (props) => {
    // const [data, setName] = useState("");
    return (
      <div style={{marginLeft: "30%",}}>
         <h4>{props.name} </h4>
        
         <input type="password" name="password"></input>
      </div>
    );
  };
  

export default PasswordComponent

