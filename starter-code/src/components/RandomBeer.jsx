import React, { Component } from 'react';
import axios from 'axios'
class RandomBeer extends Component {
    state = {
        allBeers: [],
        ready: false,
    }
    componentDidMount(){
        this.getRanTheBeer()
    }
    getRanTheBeer =()=>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random').then(res =>{ 
        // console.log(res.data)
        this.setState({
          allBeers: [res.data],
          ready: true
        })
      })
      }
    showRanBeer = () => {
        let beerCopy = this.state.allBeers;
        return beerCopy.map(eachbeer => {
          return (
            <div className='holder2'>
            <div>
            <div className='pour' key={eachbeer.id}>
              <img className="showMeTheBeer" alt="showMeTheBeer" src={eachbeer.image_url} />
              <ul className='lists'>
              <li><h1 className='col'>{eachbeer.name}</h1></li>
              <li><h2>{eachbeer.tagline}</h2></li>
              <li><h4>{eachbeer.contributed_by}</h4></li>
              </ul>
            </div>
            </div>
            </div>
          );
        });
      };
    
      render() {
        console.log(this.props);
        return <div className="holder" >{this.showRanBeer()}</div>;
      }
}

export default RandomBeer;