import React, {useState} from "react";

const InputFile = () => {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }
    
    return (
      <div style={{marginLeft: "30%",}}>
         <h4>Upload Your Profile Pic: </h4>
         <input type="file" accept="image/*" onChange={handleChange}/>
       
      </div>
    );
  };

export default InputFile
