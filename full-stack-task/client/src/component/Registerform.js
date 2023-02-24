import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component/Registerform.css";

function Registerform() {
  const [name, setname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [registertype, setregistertype] = useState("");
  const [email, setemail] = useState("");
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();
  const handleinput = () => {
    const userdata = { name, phonenumber, registertype, email };
    // if (registertype === 'offline' && registertype >= 3) {
    //    // Offline registration limit reached
    //    setFormError('Offline registration limit reached.');

       
    //  }

    if (
      name !== "" &&
      phonenumber !== "" &&
      registertype !== "" &&
      email !== "" 
    ) {
      fetch("http://localhost:8002/form", {
        method: "POST",
        headers: {
          Accepat: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      }).then((res) => {
        res
          .json()
          .then((result) => {
            console.log(result);
            navigate("/RegisterDetail");
          })
          .catch((err) => {
            window.alert(err.response.data.message);
          });
      });
    } else {
      alert("Please fill all the filled");
    }
  };
  return (
    <>
      <div className="saa">
        <div className="main-container">
          <form>
            <div className="container">
              <div className="lable-div">
                <label for="name">name:</label>
              </div>

              <div className="input-div">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  name="userId"
                />
              </div>
              <div className="lable-div">
                <label for="phonenumber">phonenumber:</label>
              </div>
              <div className="input-div">
                <input
                  type=""
                  value={phonenumber}
                  onChange={(e) => {
                    setphonenumber(e.target.value);
                  }}
                />
              </div>
              <div className="lable-div">
                <label for="registertype">registertype:</label>
              </div>

              <div className="input-div">
                <input
                  type="text"
                  value={registertype}
                  onChange={(e) => {
                    setregistertype(e.target.value);
                  }}
                  name="body"
                />
              </div>
              <div className="lable-div">
                <label for="phonenumber">email:</label>
              </div>
              <div className="input-div">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  name="body"
                />
              </div>
            </div>
          </form>
          <div className="input-div">
            <button onClick={handleinput}>Submit form</button>
          </div>
          <div
            onClick={() => {
              navigate("/Submitform");
            }}
            className="signinpage-signup-button"
          ></div>
        </div>
      </div>
    </>
  );
}

export default Registerform;
