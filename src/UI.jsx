import React, { Component } from 'react'
import Store from './Store'

export default class UI extends Component {

    // Display Books on UI
    DisplayBooks = () => {
        let books = Store.GetBooks();
        books.forEach((book) => {
            this.addBookToList(book);
        })
    }
    // Add Book To List
    addBookToList = (book) => {
        
        const table = document.querySelector('table');

        const row = document.createElement('tr');

          row.innerHTML = `
            <tr>${book.StudentName}</tr>
            <tr>${book.title}</tr>
            <tr>${book.author}</tr>
            <tr>${book.isbn}</tr>
            <tr><a href = "#" class = "btn btn-danger">X</a></tr>
          
          `;
          table.appendChild(row);
    }

    // remove Book To list
    static removeBookToList = (e) => {
           if(e.classList.contains('danger')){
               e.parentElement.parentElement.remove();
           }
    }
    
    
    render() {
        return (
            <div>
            </div>
        )
    }
}

