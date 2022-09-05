import { createSlice, configureStore} from '@reduxjs/toolkit'




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

export const formDataSlice= createSlice({
  name: 'store',
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

    addUser: (state) => {
        validate(state.formValues);
        state.IsSubmit=true;
        state.formErrors = {};
        state.listItem =  [...state.listItem, state.formValues];
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


    updateUser: (state) => {
      // setFormErrors(validate(formValues));
        state.IsSubmit=true;
        state.listItem[state.currentItem]= state.formValues;
        state.listItem = [...state.listItem];
        state.isEdit=false;
        state.formValues={ name: "", 
                        email: "", 
                        dob:"",
                        imgpic:"",
                        gender:"",
                        eduLevel:"",
                        password: "",
                        conpassword:"",
                    };
    },

    updateFormValues: (state, action)=>{
      console.log(action.payload.name);
      state.formValues ={...state.formValues, [action.payload.name]: action.payload.value};
    },

    deleteRecord: (state, action)=>{
      state.listItem.splice(action.payload.index, 1);
      state.listItem = [...state.listItem];
    },

    setFormValues:(state, action)=>{
      state.currentItem = action.payload.index;
      state.isEdit= true;
      state.formValues = { name: action.payload.row.name, 
                        email: action.payload.row.email, 
                        dob: action.payload.row.dob,
                        imgpic: action.payload.row.imgpic,
                        gender: action.payload.row.gender,
                        eduLevel: action.payload.row.eduLevel,
                        password: action.payload.row.password,
                        conpassword: action.payload.row.conpassword,
                    };
    },

    cancelAction:(state) => {
      state.IsSubmit = true;
      state.isEdit = false;
      state.formValues = { name: "", 
                      email: "", 
                      dob:"",
                      imgpic:"",
                      gender:"",
                      eduLevel:"",
                      password: "",
                      conpassword:"",
                  };
        }
  }
})


export const { addUser, updateUser, updateFormValues, deleteRecord, setFormValues, cancelAction } = formDataSlice.actions

export default formDataSlice.reducer