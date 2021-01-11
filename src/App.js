import React, { useState } from 'react';

// main function
 function App(){
    
  const obj = '';
  const temp = [
    {
      id : 1,
    },
    {
      id : 1,
    }
  ]
   // react-hooks
   const [state,setState] = useState(obj);
  
  // sending api calls through ajax and xml.
  function postData(){
   

    var xhr = new XMLHttpRequest();
    
    // open function creates a request;
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    xhr.onload = function(){
      if(xhr.status === 200){
        console.log(JSON.parse(xhr.responseText));
        setState(xhr.responseText);
      }
    }
    xhr.send();
  }
    return(
      <>
   <button onClick = {postData}>Click me</button>
    <p>{state}</p>
    <p>{temp.map((key) => key.id)}</p>;
    <p>{this}</p>
    
      </>
    )
    
    

 }

export default App;
