import React from 'react'
import axois from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function Backend(){

    const getData = () => {

       axois.get('http://localhost:5000/api/get')
       .then((res) => {
           console.log(res.data);
           document.querySelector('p').innerHTML = JSON.stringify(res.data);
       })
    }
    const sendData = () =>{
        const member = {
            "id":1,
            "name":"rahul",
            "mail":"rahul@mail.com",
            "status":"active"
        }
        Axios.post('http://localhost:5000/api/post',member)
        .then((res) => {
            console.log(res.data);
            document.querySelector('p').innerHTML = JSON.stringify(res.data);
        })
        .catch((err) => console.log(err));   
    }

  return (
      <>
      <p>Response soon</p>
      <button className = "btn btn-danger" onClick={sendData}>GET</button>
      </>
  )
}
export default Backend;