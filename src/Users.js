import React, { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then((resp) => {
      resp.json().then((result) => {
        console.warn("result", result);
        setData(result);
      });
    });
  }, []);

  return (
    <div className="App-header">
      <h1 className="h1-style">Users Table</h1>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
