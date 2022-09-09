import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";





function UpdateProduct(props) {

  console.log(props)

   // Ebbe van gyűjtve az API válasz
   const [data, setData] = useState([])

  
  useEffect(() => {
    getData();
  }, []);




   async function getData(){
    let result = await fetch("http://localhost:8000/api/product/" + props.match.params.id);
    result = await result.json().then(getData());
    setData(result);
   
   
   }


    return (
      <div>
        <Header />
        <br /> <br /> <br /> <br />
        <h1>Termék szerkesztése</h1>
        <input type="text" defaultValue={data.name} />
      </div>
    );
  }






export default UpdateProduct;
