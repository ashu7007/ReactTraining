import { createSlice } from '@reduxjs/toolkit'




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

export const formData= createSlice({
  name: 'formData',
  initialState: {
    listItem: [],
    formValues : { name: "", 
                    email: "", 
                    dob:"",
                    imgpic:"",
                    gender:"",
                    eduLevel:"",
                    password: "",
                    conpassword:"",
                    },
    IsSubmit:false,
    isEdit:false,
    currentItem: null,  
    formErrors:{},              

  },


  reducers: {

    addUser: (state,action) => {
        action.e.preventDefault();
        validate(action.payload.formValues);
        state.IsSubmit=true;
        state.formErrors = 
        state.listItem =  [...state.listItem, action.payload.formValues];
        state.formValues = {   name: "", 
                                email: "", 
                                dob:"",
                                imgpic:"",
                                gender:"",
                                eduLevel:"",
                                password: "",
                                conpassword:"",
                                }
    },



    removeUser: state => {
      state.listItem -= 1
    },
    updateUser: (state, action) => {
      state.listItem += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, updateUser } = formData.actions

export default formData.reducer