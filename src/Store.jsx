import React, { Component } from 'react'
import UI from './UI'

export default class Store extends Component {
    
    // Add Book to LocalStorage

    static AddBookToLocalStorage = (book) => {
        const books = this.GetBooks();
        books.push(book);

        localStorage.setItem('books',JSON.stringify(books));
       
       
    }

    // Get Books From LocalStorage

    static GetBooks = () => {
       let books
        if( localStorage.getItem('books') === null){
            books = [];

        } else{

            books = JSON.parse(localStorage.getItem('books'));
            
        }
        return books;
     

    }

    // Remove Book from Local Storage

   static  RemoveBooks = (isbn) => {
   
        const books = this.GetBooks();
        books.forEach((book,index) => {
            books.splice(index,1);
        })

    }
    render(){
        return(
            <>

            </>
        )
    }
}

