import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header'
import Search from './Components/Search'
import BookList from './Components/BookList'
import data from './data'
import Shelf from './Components/Shelf';

class App extends Component{
  constructor(){
    super()
    this.state ={
      books: [...data],
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf(title){
    if(this.state.shelf.includes(title) === false){
      this.setState({
        shelf: [...this.state.shelf, title]
      })
    }else{
      alert('This is already on your shelf!')
    }
    
  }

  clearShelf(){
    this.setState({
      shelf: [],
    })
  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter((e,i) =>{
      let title = e.title.toUpperCase()
      let author = e.author.toUpperCase()
      return title.includes(input) || author.includes(input)
    })
    this.setState({
      books: filteredBooks
    })
  }

  reset(){
    this.setState({
      books: [...data]
    })
  }
  

  render(){
    return (
      <div className="App">
        <Header /> 
        <Search reset={this.reset} filterBooks={this.filterBooks}/>
        <main>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf shelvedBooks={this.state.shelf} clearShelf={this.clearShelf} />
          
        </main>
        
      </div>
    );
  }
  
}

export default App;
