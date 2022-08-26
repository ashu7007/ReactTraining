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

    const removeHandler = (e) => {
        listItem.splice(e, 1)
        setlistItem(listItem => [...listItem])
        
    };

    const handleChoosedRow = (row) => {
        console.log("choosed flight", row);
        setFormValues({ name: row.name, 
                        email: row.email, 
                        dob:row.dob,
                        imgpic:row.imgpic,
                        gender:row.gender,
                        eduLevel:row.eduLevel,
                        password:row.password,
                        conpassword:row.conpassword,
                    });

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
            <td >
                <button className="btn btn-warning mx-2" data-item={data} onClick={() => handleChoosedRow(data)}>Edit</button>
                <button className="btn btn-danger mx-auto" onClick={() => removeHandler(index)}>Delete</button>
            </td>
            
          </tr>
        );
      });

  return (
    <div className="row">
        <div className="col-5">
    <div className="container">
      <div className="card">
      <form className="p-3 bg-secondary bg-opacity-10 border border-darkrounded-end" onSubmit={handleSubmit}>
        <h1 style={{marginLeft: "20%",marginTop: "1%",marginRight: "20%"}}>User Registration</h1>
        <div style={{marginLeft: "20%",marginTop: "1%",marginRight: "20%"}}>
          
          
          <div className="col">
            <label className="form-label" >Name :</label>
            <br/>
            <input className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="text-danger">{formErrors.name}</p>
          </div>
          
          <div className="col">
            <label  className="form-label">Email :</label>
            <br/>
            <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
            />
              <p className="text-danger">{formErrors.email}</p>
          </div>
          


         
            <div className="col">
                <label>Select Date of Birth :</label>
                <input class="form-control" name="dob" onChange={handleChange} type="date" />
                {/* <DatePicker selected={startDate} value={formValues.dob} onChange={getDate} /> */}
            </div>

            <div className="col">
          
                <label>Select your gender</label>
                <br/>
                <div className="row">
                    <div className="col">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id='gender-1'
                    value="male"
                    onChange={handleChange}
                    // checked={gender === 'male'} 
                    />
                <label htmlFor="gender-1">male</label><br />
                    </div>
                    <div className="col">
                    <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id='gender-2'
                    value="female"
                    onChange={handleChange}
                    // 
                    />
                <label htmlFor="gender-2">female</label><br />
                    </div>
                </div>
                
            </div>

         
 
         

        

        {/* image Upload */}
        <div className="col my-3">
         <label>Upload Your Profile Pic: </label>
         <br/>
         <input className="form-control" type="file" accept="image/*" name="imgpic" onChange={handleChange}/>
       
        </div>
        <p className="text-danger">{formErrors.pic}</p>


          <div className="col my-3">
          <label>Level of Education</label>
          <select name="eduLevel"class="form-select" onChange={handleChange}aria-label="Default select example">
            <option  value="UG">UG</option>
            <option value="PG" >PG</option>
            <option value="PHD" >PHD</option>
            <option value="Diploma">Diploma</option>
          </select>
          {/* <Select options={education}></Select> */}
          </div>

          <div className="col my-3">
            <label>Password</label>
            <br/>
            <input
                className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.password}</p>

          <div className="col my-3">
            <label>Confirm Password</label>
            <br/>
            <input
                className="form-control"
              type="password"
              name="conpassword"
              placeholder="Confirm Password"
              value={formValues.conpassword}
              onChange={handleChange}
            />
          </div>
          <p className="text-danger">{formErrors.conpassword}</p>
          <button className="btn btn-primary mb-4">Submit</button>
        </div>
      </form>
      </div>

       
        
    </div>
    </div>
        <div className="col">
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
                <th >Action</th>

                </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    </div>
        </div>
    </div>
  );
}

export default RegisterComponent;