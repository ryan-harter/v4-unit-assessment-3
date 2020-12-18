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
    this.state.userInput.toUpperCase()
  }

  handleFilter(){
    this.props.filterBooks(this.state.userInput.toUpperCase())
  }
  

  handleClear(){
    this.setState({
      userInput: '',
    })
    this.props.reset()
    
  }


  render(){

    const renderClearButton = () =>{
      if(this.state.userInput){
        return <button className='btn' onClick={() => this.handleClear()}>clear search</button>
        
      }
    }



    return(
      <div className='search'>
        <input onChange={e => this.handleChange(e)}
        value={this.state.userInput}/>

        <button className='btn' onClick={() => this.handleFilter()}>search</button>
        
        {/* <button onClick={() => this.handleClear()}>clear search</button> */}
        {this.props.filteredBooks}
        {renderClearButton()}

        
      </div>
    )
  }
}

export default Search