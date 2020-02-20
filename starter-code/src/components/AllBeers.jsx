import React, { Component } from "react";

class AllBeers extends Component {
  showBeer = () => {
    let beerCopy = this.props.allBeers;
    return beerCopy.map(eachbeer => {
      return (
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
      );
    });
  };

  render() {
    console.log(this.props);
    return <div className="holder" >{this.showBeer()}</div>;
  }
}

export default AllBeers;
