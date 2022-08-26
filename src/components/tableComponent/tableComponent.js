import React from "react";



const TableComponent = (props)=>{

    const tableRows = props.items.map((data,index) => {
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

    return (<div>
        
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
        </div>)
}

export default TableComponent;