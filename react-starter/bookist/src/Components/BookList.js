import React from 'react'
import './booklist.css'


function BookList(props){
  let booksMapped = props.books.map((e,i)=>{
    return <section className='book-card' key={i}>
      <img onClick={() => props.addToShelf(e)} src={e.img} />
      <p>{e.title}</p>
      <p>{e.author}</p>
    </section>
  })
  return(
    

    <div id='book-list'>
      
      {booksMapped}
    </div>
  )
}

export default BookList