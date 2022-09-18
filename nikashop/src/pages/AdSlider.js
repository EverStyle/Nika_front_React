import React from 'react';
import Carousel from 'react-elastic-carousel'
import axios from 'axios';
import styles from './AdSlider.css';

export default class AdSlider extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://market.ruban.xyz/api/products/')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div className="ContainerSlider">
        <Carousel itemsToShow={5} className="AdSlider">
          {this.state.persons.map(person => <div>{person.name}</div>)}
        </Carousel>
      </div>
    )
  }
}