import React, { useEffect, useState } from "react";
import "../component/RegisterDetail.css"

function RegisterDetail() {
  const [data, setData] = useState([]);
//   const[errorData,setErrorData]=useState("")

  useEffect(() => {
    fetch("http://localhost:8002/form")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);

  const errorMassage = <p>Sorry Not Invited !!</p>;
  const showDetails = data.map((data, i) => {
    return (
       <div className="maincontainer">
      <ul key={i}>
        <li className="namediv">{data.name}</li>
        <li className="namediv">{data.phonenumber}</li>
        <li className="namediv">{data.registertype}</li>
        <li className="namediv">{data.email}</li>
      </ul>
      </div>
    );
  });

  let errorData = data.filter((item) => item.registertype === "offline");
  let showError = false;
  if (errorData.length >= 3) {
    showError = true;
  }
  console.log(showError);
   console.log("offline data",errorData);
  return <>{showError ? errorMassage : showDetails}</>;
}

export default RegisterDetail;
