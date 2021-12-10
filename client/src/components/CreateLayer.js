import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//Layer(position: integer, drawing_id: integer, information: string, name: string) 
function CreateLayer({ onLogin, user, setDispear, drawingZ, information }) {

  const [layername, setLayerName] = useState("");
  const [zindex,setZIndex] = useState(1)


  let pleasework = information.map(data=>{return data.split(",")[1]})

  let newZIndex = (Math.max(pleasework)+1)
  console.log("------")
  console.log(information)
  console.log("------")
  console.log(pleasework)
  console.log(newZIndex)

  // if(newZIndex){
  //   setZIndex(newZIndex)
  // }


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/layers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:layername,
        position:1,
        drawing_id:drawingZ,
        information: `#00FA00,${newZIndex}`
      }),
    }).then((resp) => resp.json())
    .then((data) => console.log(data));
    // setDispear(true)
    // window.location.reload();
    };

  return (
    <div className="loginYo">
      <div className = "loginYoForm">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Layer Name:{" "}
              <input
                type="text"
                className="name"
                autoComplete="off"
                value= {layername}
                onChange={(e) => setLayerName(e.target.value)}
              ></input>
              </label>
              </div>
              <div className="button-submit">
              <button type="submit">YOgfdnaZJLKjndgfljkasdnfgljkanfsdlkjnfadsYO</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default CreateLayer;
