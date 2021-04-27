import { Component } from 'react';
import Header from './Header';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import Footer from './Footer';
import { creatures } from './creatures.js';
import './App.css';
import React from 'react';

const creatureTypes = [...new Set(creatures.map(c => c.keyword))];

class App extends Component {
state = {
  creatures: creatures
}

  handleSearch = ({ nameFilter, typeSort, sortField }) => {
    const creatureRegex = new RegExp(nameFilter, 'i');

    const newData = creatures
      .filter(c => {
        return !nameFilter || c.title.match(creatureRegex);
      })
      .filter(c => {
        return !typeSort || c.keyword === typeSort;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: newData });
  }

  render() {
    const { creatures } = this.state;
   
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
