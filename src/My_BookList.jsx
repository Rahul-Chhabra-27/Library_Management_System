import React, { Component } from 'react';
import Book from './Book'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Array_data from './Array_Data'



class My_BookList extends Component{
    
    render(){
  const array = [...Array_data];
    return (
        <div className = "container">
            <h1 className="display-4 text-center">
                    <i class="fas fa-book-open text-primary"></i> My<span class="text-primary">Book</span>List</h1>
            <table className="table table-striped mt-5">
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN#</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="book-list">
                {
                     array.map((data) => {
                        return <Book title =  {data.title}
                           isbn = {data.isbn}
                           studentName={data.studentName}
                           author = {data.author} />
                     })
                 }
                

            </tbody>
        
           </table>
        </div>
    );
    }
}
export default My_BookList;

// UI tasks
// 1. Add Book to List
// 2. Remove Book to List
// 3. Generate Alert
// 4. Display Book

// LocalStorage
// 1.Add Book to local Storage
// 2.Remove Book to LocalStorage
// 3.Get Books from localStorage