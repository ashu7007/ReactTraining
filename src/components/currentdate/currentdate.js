import React, {useState} from "react";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";  


export default function DateofBirth() {
    const [startDate, setStartDate] = useState(new Date()); 
    
    const getDate = (date) => setStartDate(date)

  return (  <div style={{marginLeft: "30%",}}>
    <h4>Select Date of Birth :</h4>
    <DatePicker selected={startDate} onChange={getDate} />

  </div>
     );


//  Code to get current date
//   const current = new Date();
//   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
//   const [showDate, setDate] = useState('Date : __ /__ /__')

//   let getDate = () =>{
//     setDate('Date : '+ date)
//   };
//   return (
//     <div style={{marginLeft: "35%",}}>
//         <h2>Select Date :</h2>
//       <h3 style={{color: 'red'}}>{showDate}</h3>
//       <button type="button" onClick={getDate}>Click Here to know today's Date</button>
//     </div>
//   );


}