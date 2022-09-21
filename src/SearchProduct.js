import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";
function SearchProduct() {

const [data, setData] = useState([]);

async function search(key){

        console.warn(key)

        let result = await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        setData(result)
    }

  return (
    <div>
      <Header />
      <br /> <br /> <br /> <br />
      <div className="col-sm-6 offset-sm-3">
        <h1>Termék keresése</h1><br /> <br />
        <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Termék neve..." />
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
   
          </tr>
        ))}
      </Table>
      </div>
    </div>
  );
}

export default SearchProduct;
