import Header from "./Header";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";




 function Login(){ 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    let item = {email, password};
    //console.log(item);
    useEffect(() =>{

        if(localStorage.getItem("user-info")){
          navigate("/add");
        }
      }, [])
    async function login(){         
    let result = await fetch("http://localhost:8000/api/login", {
        method: "POST",      
        headers: {
            "Content-Type": "application/json",  
            "Accept" : "application/json"  
        },
        body: JSON.stringify(item), 

     });
     result = await result.json();
    
     if(result.error){
      alert("Érvénytlen jelszó vagy email cím");
      navigate("/login");
     }else{

      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/add");
     }


    
    
    }





    return(
        
        <div>
             <Header/>
               <div class="col-sm-6 offset-sm-3">
               <br />
                <br />
                <br />
            <h1>Belépés</h1>        
 
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control" placeholder="Email" />
      <br />
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Jelszó" />
      <br />
      <button onClick={login} type="submit" class="btn btn-primary">Belépés</button>
        </div>
         </div>
        
    )
}


export default Login;