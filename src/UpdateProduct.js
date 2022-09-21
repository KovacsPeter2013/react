import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";






function UpdateProduct(props) {

   // Ebbe van gyűjtve az API válasz
   const [data, setData] = useState([]);

   // Props használata:
  const params = useParams()
  const productid = params.id


const [productInput, setProduct] = useState({

  
  updatdname: '',
  updatdprice: '',
  updatddescription: ''
})


const handleInput = (e) =>{
  e.persist();
  setProduct({...productInput, [e.target.name]:e.target.value  })

}





  
  useEffect(() => {
    getData();
  }, []);

   async function getData(){
    let result = await fetch("http://localhost:8000/api/product/"+productid);
    result = await result.json();   
    setData(result);
   
   
   }


     function update(){

      //console.warn(name, description, price, file)
      const Formdata = new FormData();
      Formdata.append('name', data.name);
      Formdata.append('description', data.description);
      Formdata.append('price', data.price);
      //Formdata.append('file', file);

      let result = fetch("http://localhost:8000/api/update/"+productid, {
          method: "POST",
          body: Formdata
       })
       //alert("Termék feltöltve")
      // console.log(result)
  }
   


    return (
      <div>
        <Header />
        <br /> <br /> <br /> <br />
        <h1>Termék szerkesztése</h1>
        <input name="name" type="text"  onChange={handleInput}defaultValue={data.name} /><br/><br/>
        <input name="price" type="text"  onChange={handleInput} defaultValue={data.price} /><br/><br/>
        <input name="description" type="text"  onChange={handleInput} defaultValue={data.description} /><br/><br/>
        <img src={"http://localhost:8000/"+data.file_path} style={{width:300 }}/><br/><br/>

        <button onClick={update} className="btn btn-success">Frissítés</button>
      </div>
    );
  }






export default UpdateProduct;
