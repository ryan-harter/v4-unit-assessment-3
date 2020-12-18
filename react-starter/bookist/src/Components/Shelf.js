import React from 'react'
import './shelf.css'

function Shelf(props){
  let displayToShelf = props.shelvedBooks.map((e,i)=>{
    return <p key={i}>{e.title}</p>
  })
  return(
    <div id='shelf'>
      <h3>Your Shelf</h3>
      <button onClick={() => props.clearShelf()}>clear shelf</button>
      {displayToShelf}
    </div>
  )

}

export default Shelf