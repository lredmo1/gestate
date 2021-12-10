import React, { useState } from "react";
import { NavLink } from "react-router-dom";



function CreateDrawing({ onLogin, user, setDispear }) {

  const [name, setDrawingName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/drawings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        user_id:user.id
      }),
    }).then((resp) => resp.json())
    .then((data) => console.log(data));
    setDispear(true)
    window.location.reload();
    };
  
    function backToDashboard() {
      window.location.reload()
    }

  //Drawing(id: integer, name: string, user_id: integer, created_at: datetime, updated_at: datetime) 

  return (
    <div className="loginYo">
      <div className = "loginYoForm">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>
              Title:{" "}
              <input
                type="text"
                className="name"
                autoComplete="off"
                value= {name}
                onChange={(e) => setDrawingName(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="button-submit">
            <button type="submit">Creat New Drawing</button>
          </div>
        </form>
      </div>
      <button onClick = {backToDashboard}>Back to Dashboard</button>
      </div>
    </div>
  );
}

export default CreateDrawing;
