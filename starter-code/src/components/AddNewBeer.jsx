import React, { Component } from "react";
import Axios from 'axios'
class AddNewBeer extends Component {
    state={

    }
    
    addBeer=(event)=>{
       event.preventDefault()
       console.log(this.state)
       Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
       .then(res => console.log(res))
       .catch(err => console.log(err))
       

    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  render() {
    console.log("this");
    return (
      <div className='holder3'>
        <form className='fill' onSubmit={this.addBeer}>
          <input placeholder='name'name="name" type="text" onChange={this.handleChange}/>
          <input placeholder='tagline'name="tagline" type="text" onChange={this.handleChange}/>
          <input placeholder='description'name="description" type="text" onChange={this.handleChange}/>
          <input placeholder='first brew'name="first_brewed" type="text" onChange={this.handleChange}/>
          <input placeholder='brewers tip'name="brewers_tips" type="text" onChange={this.handleChange}/>
          <input placeholder='attenuation level'name="attenuation_level" type="number" onChange={this.handleChange}/>
          <input placeholder='contributed by'name="contributed_by" type="text" onChange={this.handleChange}/>
          <input type="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddNewBeer;
