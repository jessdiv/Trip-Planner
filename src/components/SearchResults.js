import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayTrip from './DisplayTrip';
import ReactLoading from 'react-loading';

class SearchResults extends Component {
  constructor() {
    super();
    this.state ={
      trips: null,
      accessibleRoutes: 'off',
    }
  }

  componentDidUpdate() {
    let accessibleRoutes;

    function getRoutes(wheelchairAccess) {
      if (wheelchairAccess) {
        accessibleRoutes = 'on';
        return accessibleRoutes;
      } else {
        accessibleRoutes = 'off';
        return accessibleRoutes;
      }
    }

    accessibleRoutes = getRoutes(this.props.wheelchairAccess);
    // console.log(accessibleRoutes);

    if (this.props.submitted === true) {
      this.props.resultSubmitted();
      axios.get(`https://trip-planner-server.herokuapp.com/searchresults?origin=${this.props.origin}&destination=${this.props.destination}&time=${this.props.time}&date=${this.props.date}&wheelchairAccess=${accessibleRoutes}`)
      .then(res => {
        const trips = res.data;
        this.setState({ trips })
      })
    }

    axios.get(``)
  }

  render() {
    // if ( this.state.trips === null ) {
    //   return (<ReactLoading type={'bubbles'} color={'firebrick'} height={667} width={375}/>)
    // }

    return(
      this.state.trips === null ? <div></div> :
      <div>
        <div className='tripHeading'>
          <h2 className='route'> {this.props.originName} to {this.props.destinationName}</h2>
          <p class='accessibilityMessage'> {this.props.tripAccessibility} </p>
          <p className='routeTime'> Leaving after: {this.props.timeEntered }, {this.props.date }</p>
        </div>
        <DisplayTrip trips={ this.state.trips } origin={this.props.origin} destination={this.props.destination} originName={this.props.originName} destinationName={this.props.destinationName} />
      </div>
    );
  }
}

export default SearchResults
