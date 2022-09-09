import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductList() {
  const [data, setData] = useState([]); // Ezt hívják a state definiálásának

  useEffect(() => {
    getData();
  }, []);


  async  function Delete(id){
    let result = await fetch("http://localhost:8000/api/delete/"+ id, {

      method:"DELETE"
    });

    result = await result.json().then(getData())
    //console.log(result);
    if(!result.error){
      alert("Sikeres termék törlés")
    }else{
      alert("A termék törlése nem sikeres")
    }

  }
  async function getData(){
    let result = await fetch("http://localhost:8000/api/list");
    result = await result.json();
    setData(result);
    
  }
  return (
    <div>
      <Header />
      <br /><br/><br/><br />
      <h1>Termék lista</h1>
      <br/><br />
      <div className="col-sm-8 offset-sm-2 ">
      <Table>
        <tr>
          <td>Id</td>
          <td>Termék neve</td>
          <td>ÁR</td>
          <td>Leírás</td>
          <td>Fotó</td>
          <td>Művelet</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td>
              <img src={"http://localhost:8000/" + item.file_path} style={{ width: 100 }}/>
            </td>
             <td><Button onClick={() => Delete(item.id)} className="btn btn-danger" style={{backgroundColor:"red"}}>Törlés</Button></td>
             <td>
              <Link to={"/update/" + item.id}>
              <Button  className="btn btn-success" style={{backgroundColor:"green"}}>Szerkesztés</Button>
              
              </Link>
              </td>
          </tr>
        ))}
      </Table>
    </div>
    </div>
  );
}

export default ProductList;
