import React, { Component } from 'react';
import Array_Data from './Array_Data';
import Book from './Book'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import input_data from './Input_data';
import Input from './Input';

class BookList extends Component{

    state = {
        persons:JSON.parse(localStorage.getItem('books')),
        // persons:Array_Data
    }
    BooksFromLocalStorage = () => {
       const books = JSON.parse(localStorage.getItem('books'));
       const new_book = { key : "453",title:"Book1",author:"brad traversy",isbn:"230987",studentName:"Ajay"}
       books.push(new_book);
       localStorage.setItem('books',JSON.stringify(books));
       this.setState({persons:JSON.parse(localStorage.getItem('books'))});

    }
    render(){
        const books = this.state.persons.map(book => {
            return <Book title={book.title}
                    author={book.author} 
                    isbn = {book.isbn}
                    key={book.id}
                    studentName={book.studentName} />
        })
        const inputs = input_data.map(input => {
            return <Input for={input.for}
             main={input.main} 
             value={input.value} 
             id = {input.id}
             key={input.for}
             className={input.className}
             type={input.type} />
        })

        return(
            <div className="container">
                <h1 className="display-4 text-center">
                    <i className="fas fa-book-open text-primary"></i> 
                    My<span className="text-primary">Book</span>List
                </h1>
                <form onSubmit={this.BooksFromLocalStorage} id="book-form">
                         {inputs}
                </form>
                <table className = "table table-striped mt-5">
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
                        {books}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default BookList;