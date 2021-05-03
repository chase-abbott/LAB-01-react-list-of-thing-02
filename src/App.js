import { Component } from 'react';
import Header from './Header';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import Footer from './Footer';
import request from 'superagent';

import './App.css';
import React from 'react';

const CREATURE_API_URL = 'https://lab-06-servers.herokuapp.com/api/creatures';


class App extends Component {
  state = {
    creatures: [],
    creatureTypes: []
  }
  
  
  async componentDidMount(){

    const response = await request
      .get(CREATURE_API_URL);
    
    const creatureTypes = [...new Set(this.state.creatures.map(c => c.keyword))];

    this.setState({ creatures : response.body, creatureTypes : creatureTypes });
  }

  handleSearch = ({ nameFilter, typeSort, sortField }) => {
    const { creatures } = this.state;

    const creatureRegex = new RegExp(nameFilter, 'i');

    const newData = creatures
      .filter(c => {
        return !nameFilter || c.title.match(creatureRegex);
      })
      .filter(c => {
        return !typeSort || c.keyword === typeSort;
      })
      .sort((a, b) => a[sortField] - b[sortField]);

    this.setState({ creatures: newData });
  }

  render() {
    const { creatures, creatureTypes } = this.state;
   
    return (
      <div className="App">
        <Header />
        <CreatureSearch typesProp={creatureTypes} onSearch={this.handleSearch}/>
        <main>
          <CreatureList creatures={creatures}/>
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
