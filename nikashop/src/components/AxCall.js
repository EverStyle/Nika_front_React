import React from 'react';

import axios from 'axios';

axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
export default class AxCall extends React.Component {
  state = {
    persons: []
  }
  
  componentDidMount() {
    axios.get(`http://localhost:8000/sections/`)
      .then(res => {
        const persons = res.data;
        console.log(persons)
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <div key={person.id}>{person.name}</div>)}
      </ul>
    )
  }
}