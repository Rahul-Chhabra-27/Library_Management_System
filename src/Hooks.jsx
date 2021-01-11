import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

 function Hooks() {
      
     return (
        <div className = "container">
               <h1 class="display-4 text-center">
                    <i class="fas fa-book-open text-primary"></i> My<span class="text-primary">Book</span>List</h1>
        <button className = "btn btn-danger">danger</button>
        <button className = "btn btn-success">danger</button>
        <button className = "btn btn-primary">danger</button>
        <button className = "btn btn-secondary">danger</button>
               <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
        
        <br></br>
        <div id= "button" className = "alert alert-success" > Book added</div>


        </div>
        
    )
}
export default Hooks;
