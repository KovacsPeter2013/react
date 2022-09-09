
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


function Register() {


    useEffect(() =>{

      if(localStorage.getItem("user-info")){
        navigate("/add");
      }
    }, [])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



     async function signUp(){       

        let item = {name, email, password};
         //console.warn(item)

        let result =  await fetch("http://localhost:8000/api/register", {
            method: "POST",
            body: JSON.stringify(item), // Fontos ezt így küldeni
            headers: {
                "Content-Type": "application/json",  // Ezeket fontos megadni
                "Accept" : "application/json"  // Ezeket fontos megadni
            }

         })

         result = await result.json();
         localStorage.setItem("user-info", JSON.stringify(result));
         navigate("/add");
    }

  return (
    <div>
       <Header/>
    <div class="col-sm-6 offset-sm-3">
      
      <br />
      <br />
      <br />
      <h1>Regisztráció</h1>
      <input type="text"value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Név" />
      <br />
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Email" />
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Jelszó" />
      <br />
      <button onClick={signUp} type="submit" class="btn btn-primary">Regisztráció</button>
    </div>
    </div>
  );
}

export default Register;
