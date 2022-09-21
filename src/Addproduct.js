import Header from "./Header";
import {useState} from 'react';





function Addproduct(){


    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [file, setFile] = useState("");


    async function Add_Product(){

        //console.warn(name, description, price, file)
        const Formdata = new FormData();
        Formdata.append('name', name);
        Formdata.append('description', description);
        Formdata.append('price', price);
        Formdata.append('file', file);

        let result = await fetch("http://localhost:8000/api/addproduct", {
            method: "POST",
            body: Formdata
         })
         //alert("Termék feltöltve")
        // console.log(result)
    }

    return(
        <div>
            <Header/>
            <br/> <br/> <br/> <br/> 
            <div className="col-sm-6 offset-sm-3">
            <h1>Termék hozzáadás</h1>


            <input type="text" className="form-control"
            onChange={(e)=>setName(e.target.value)}    
            placeholder="Termék neve"/><br/> 

            <input type="text" className="form-control" 
             onChange={(e)=>setDescription(e.target.value)}   
            placeholder="Termék leírása"/><br/>


            <input type="text" className="form-control"
            onChange={(e)=>setPrice(e.target.value)} 
            
            placeholder="Termék ára"/><br/>


            <input type="file" className="form-control"
             onChange={(e)=>setFile(e.target.files[0])}   

             placeholder=""/><br/> 
            <button onClick={Add_Product} type="=submit" className="btn btn-primary">Mentés</button>
            </div>
        </div>
    )
}


export default Addproduct;