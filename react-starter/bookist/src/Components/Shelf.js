import React from 'react'
import './shelf.css'

function Shelf(props){
  let displayToShelf = props.shelvedBooks.map((e,i)=>{
    return <p key={i}>{e.title}</p>
  })

  let shelfEmpty = () => {
    if(props.shelvedBooks.length < 1) {
      return <p>Your shelf is empty! Add something now!</p>
    }else{
      return <p>Keep adding to your collection!</p>
    }
  }
  return(
    <div id='shelf'>
      <h3>Your Shelf</h3>
      {shelfEmpty()}
      <button onClick={() => props.clearShelf()}>clear shelf</button>
      {displayToShelf}
      
    </div>
  )

}

export default Shelf