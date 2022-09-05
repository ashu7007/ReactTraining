import { useEffect } from "react";
import DatePicker from "react-datepicker"; 
import Select from "react-select";
import { useSelector, useDispatch } from 'react-redux'
import { addUser,updateFormValues} from "../../reducer/reducer";

import "react-datepicker/dist/react-datepicker.css";  
import "bootstrap/dist/css/bootstrap.min.css";


function RegisterComponent() {
    
    const formValues = useSelector((state) => state.formValue.formValues);
    const listItem = useSelector((state) => state.formValue.listItem);
    
    const formErrors = useSelector((state) => state.formErrors);
    const isSubmit = useSelector((state) => state.IsSubmit);
    const currentItem = useSelector((state) => state.currentItem);
    const dispatch = useDispatch()

    // const [listItem,setlistItem] = useState([]);
    // const initialValues = {   name: "", 
    //                         email: "", 
    //                         dob:"",
    //                         imgpic:"",
    //                         gender:"",
    //                         eduLevel:"",
    //                         password: "",
    //                         conpassword:"",
                             
    //                     };
    // const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);
    // const [isEdit, setIsEdit] = useState(false);
    // const [isCancel, setIsCancel] = useState(false);
    // const [currentItem, setCurrentItem] = useState(null);

    // const [startDate, setStartDate] = useState(new Date()); 
    // const getDate = (date) => setStartDate(date)

    // const [gender, setgender] = useState();

    // const education = [
    //     {label:"PD"},
    //     {label:"PG"},
    //     {label:"UG"},
    //     {label:"Diploma"},
    // ]


    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateFormValues({name,value}));
        // setFormValues({ ...formValues, [name]: value });
    };

    const removeHandler = (e) => {
        // listItem.splice(e, 1)
        // setlistItem(listItem => [...listItem])
        
    };

    const handleChoosedRow = (row,index) => {
        // setCurrentItem(index);
        // setIsEdit(true);
        // handlerButton();
        // setFormValues({ name: row.name, 
        //                 email: row.email, 
        //                 dob:row.dob,
        //                 imgpic:row.imgpic,
        //                 gender:row.gender,
        //                 eduLevel:row.eduLevel,
        //                 password:row.password,
        //                 conpassword:row.conpassword,
        //             });

      };


      const onEdit = (e) => {
        e.preventDefault();
        // setFormErrors(validate(formValues));
        // // setIsSubmit(true);
        // listItem[currentItem]= formValues;
        // setlistItem(listItem => [...listItem]);
        // setIsEdit(false);
        // handlerButton();
        // console.log(e);

        // // setlistItem(...formValues);
        // setFormValues({ name: "", 
        //                 email: "", 
        //                 dob:"",
        //                 imgpic:"",
        //                 gender:"",
        //                 eduLevel:"",
        //                 password: "",
        //                 conpassword:"",
        //             });
    };

    const handleCancel = () => {
        // setIsSubmit(true);
        // setIsEdit(false);
        // handlerButton();
        // setFormValues({ name: "", 
        //                 email: "", 
        //                 dob:"",
        //                 imgpic:"",
        //                 gender:"",
        //                 eduLevel:"",
        //                 password: "",
        //                 conpassword:"",
        //             });
    };

    const handleSubmit = (e) => {
        console.log(e.target.name.value);
        // console.log(formValues);
        e.preventDefault();
        // validate(formValues);
        dispatch(addUser());
        // setIsSubmit(true);
        // setlistItem(listItem => [...listItem, formValues])
        // console.log(listItem)

        // setlistItem(...formValues);
       
    };

    // useEffect(() => {
        
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //     }
    // }, [formErrors]);


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

    const handlerButton = ()=>{
        if(false)
        {
        return(
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary mb-4 " onClick={onEdit}>Edit</button>
                <button className="btn btn-danger mb-4" onClick={handleCancel}>Cancel</button>
            </div>)

        }
        else {return(
            <div>
          <button className="btn btn-primary mb-4">Submit</button>
        </div>
        )}
    }
    const tableRows = listItem.map((data,index) => {
      console.log(data);
        return (
          <tr key={index}> 
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.dob}</td>
            <td>{data.gender}</td>
            <td>{data.eduLevel}</td>
            <td><img width="30" height="30" src="https://st.depositphotos.com/2101611/3925/v/950/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"/></td>
            <td >
                <button className="btn btn-warning mx-2" data-item={data} onClick={() => handleChoosedRow(data,index)}>Edit</button>
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
              // value={formValues.name}
              onChange={handleChange}
            />
            {/* <p className="text-danger">{formErrors.name}</p> */}
          </div>
          
          <div className="col">
            <label  className="form-label">Email :</label>
            <br/>
            <input
                className="form-control"
                type="text"
                name="email"
                placeholder="Email"
                // value={formValues.email}
                onChange={handleChange}
            />
              {/* <p className="text-danger">{formErrors.email}</p> */}
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
        {/* <p className="text-danger">{formErrors.pic}</p> */}


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
              // value={formValues.password}
              onChange={handleChange}
            />
          </div>
          {/* <p className="text-danger">{formErrors.password}</p> */}

          <div className="col my-3">
            <label>Confirm Password</label>
            <br/>
            <input
                className="form-control"
              type="password"
              name="conpassword"
              placeholder="Confirm Password"
              // value={formValues.conpassword}
              onChange={handleChange}
            />
          </div>
          {/* <p className="text-danger">{formErrors.conpassword}</p> */}
          {/* <button className="btn btn-primary mb-4">Submit</button> */}
          {handlerButton()}
        </div>
      </form>
      </div>

       
        
    </div>
    </div>
        <div className="col">
        <div>
        
        <table className="table ">
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