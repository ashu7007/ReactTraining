import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";

// class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {    this.setState({value: event.target.value});  }
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }


// const NameForm = () => {
//     const [name, setName] = useState("");
    
//     return (
//       <div style={{marginLeft: "35%",}}>
//          <h2>Enter your name</h2> 
//         <input type="text" placeholder="enter your name" name="name" />
    
       
//       </div>
//     );
//   };

const InputComponent = (props) => {
    const [data, setName] = useState("");
    let labelWord = "Enter your " + props.labelName;

    return (
      <div style={{marginLeft: "30%",}}>
         <h4>{props.labelName} </h4>
        <TextField
          value={data}
          label={labelWord}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
    );
  };
  

export default InputComponent