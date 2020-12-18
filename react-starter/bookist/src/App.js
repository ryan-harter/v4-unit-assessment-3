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
  }

  addToShelf(title){
    this.setState({
      shelf: [...this.state.shelf, title]
    })
  }

  clearShelf(){
    this.setState({
      shelf: [],
    })
  }

  render(){
    return (
      <div className="App">
        <Header /> 
        <Search bookList={this.state.books}/>
        <main>
          <BookList books={this.state.books} addToShelf={this.addToShelf}/>
          <Shelf shelvedBooks={this.state.shelf} clearShelf={this.clearShelf} />
        </main>
        
      </div>
    );
  }
  
}

export default App;
