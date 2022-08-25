import { useState, useEffect } from "react";
import DatePicker from "react-datepicker"; 
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";  
import "bootstrap/dist/css/bootstrap.min.css";


function RegisterComponent() {

    const [listItem,setlistItem] = useState([]);
    const initialValues = {   name: "", 
                            email: "", 
                            dob:"",
                            imgpic:"",
                            gender:"",
                            eduLevel:"",
                            password: "",
                            conpassword:"",
                             
                        };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [startDate, setStartDate] = useState(new Date()); 
    const getDate = (date) => setStartDate(date)

    const [gender, setgender] = useState();

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        setlistItem(listItem => [...listItem, formValues])
        console.log(listItem)

        // setlistItem(...formValues);
        setFormValues({ name: "", 
                        email: "", 
                        dob:"",
                        imgpic:"",
                        gender:"",
                        eduLevel:"",
                        password: "",
                        conpassword:"",
                    });
    };

    useEffect(() => {
        
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        console.log(values)

        if (!values.name) {
        errors.name = "Name is required!";
        }
        
        if (!values.email) {
        errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
        }
        if (!values.imgpic){
            errors.imgpic = "picture is required";
        }
        if (!values.password) {
        errors.password = "Password is required";
        } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
        }

        if (!values.conpassword) {
            errors.conpassword = "Confirm is required!";
        } 
        else if (values.password !== values.conpassword) {
        errors.conpassword = "password and confirm password is not same";}
        return errors;
    };


    const tableRows = listItem.map((data,index) => {
        return (
          <tr key={index}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.dob}</td>
            <td>{data.gender}</td>
            <td>{data.eduLevel}</td>
            <td>{data.imgpic}</td>
            
          </tr>
        );
      });

  return (

    <div style={{marginLeft: "20%",marginTop: "1%",marginRight: "20%"}} className="container">
      <form style={formCss} onSubmit={handleSubmit}>
        <h1 style={{marginLeft: "20%",marginTop: "1%",marginRight: "20%"}}>User Registration</h1>
        <div style={{marginLeft: "20%",marginTop: "1%",marginRight: "20%"}}>
          
          <div className="field">
            <label>Name :</label>
            <br/>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Email :</label>
            <br/>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
 
          <div style={{marginTop: "5%"}} className="field">
            <label>Select Date of Birth :</label>
            
            <DatePicker selected={startDate} value={formValues.dob} onChange={getDate} />
          </div>

        <div style={{marginTop: "5%"}} className="field">
          
          <label>Select your gender</label>
          <br/>
          <input
            type="radio"
            name="gender"
            id='gender-1'
            value="male"
            onChange={handleChange}
            // checked={gender === 'male'} 
            />
          <label htmlFor="gender-1">male</label><br />

          <input
            type="radio"
            name="gender"
            id='gender-2'
            value="female"
            onChange={handleChange}
            // 
            />
          <label htmlFor="gender-2">female</label><br />

        </div>

        {/* image Upload */}
        <div style={{marginTop: "5%"}}>
         <label>Upload Your Profile Pic: </label>
         <br/>
         <input type="file" accept="image/*" name="imgpic" onChange={handleChange}/>
       
        </div>
        <p>{formErrors.pic}</p>


          <div style={{marginTop: "5%"}}>
          <label>Level of Education</label>
          <Select options={education}></Select>
          </div>

          <div style={{marginTop: "5%"}} className="field">
            <label>Password</label>
            <br/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>

          <div style={{marginTop: "5%"}} className="field">
            <label>Confirm Password</label>
            <br/>
            <input
              type="password"
              name="conpassword"
              placeholder="Confirm Password"
              value={formValues.conpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.conpassword}</p>
          <button className="fluid ui button blue" on>Submit</button>
        </div>
      </form>

        <div>
        
            <table className="table">
                <thead>
                    <tr>
                    <th >Name</th>
                    <th >Eamil</th>
                    <th >Birth Date</th>
                    <th >Gender</th>
                    <th >Education QF</th>
                    <th >Pic</th>

                    </tr>
                </thead>
                <tbody>
                {tableRows}
                </tbody>
            </table>
        </div>
        
    </div>
  );
}

export default RegisterComponent;