import React, {Component} from 'react'
import './search.css'

class Search extends Component{
  constructor(){
    super()
    this.state = {
      userInput: '',

    }
  }

  handleChange(e){
    this.setState({
      userInput: e.target.value
    })
  }

  handleSearch(){
    
  }

  handleClear(){
    this.setState({
      userInput: '',
    })
  }

  render(){
    return(
      <div className='search'>
        <input onChange={e => this.handleChange(e)}
        value={this.state.userInput}/>

        <button onClick={() => this.handleSearch()}>search</button>

        <button onClick={() => this.handleClear()}>clear search</button>
      </div>
    )
  }
}

export default Search