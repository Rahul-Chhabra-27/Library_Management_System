import React from 'react'

function Book(props) {
        
    return (
             <>
             <tr className = "table-secondary">
            <td>{props.studentName}</td>
            <td>{props.title}</td>
            <td>{props.author}</td>
            <td>{props.isbn}</td>
            <td> <a href="#" className = "btn btn-danger btn-delete">X</a></td>
             </tr>
             </>
        
    )
}

export default Book;

