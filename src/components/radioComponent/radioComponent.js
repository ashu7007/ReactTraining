import React, {useState} from "react";


function RadioComp() {
  const [gender, setgender] = useState();

  // this function will be called when a radio button is checked
  const handleChange = (e) => {
    setgender(e.target.value);
  }

  return (
    <div style={{marginLeft: "35%",marginTop: "1%"}}>
          <h2>Select your gender</h2>

          <input
            type="radio"
            name="gender"
            id='gender-1'
            value="male"
            onChange={handleChange}
            checked={gender === 'male'} />
          <label htmlFor="gender-1">male</label><br />

          <input
            type="radio"
            name="gender"
            id='gender-2'
            value="female"
            onChange={handleChange}
            checked={gender === 'female'} />
          <label htmlFor="gender-2">female</label><br />

    </div>
  );
}

export default RadioComp;