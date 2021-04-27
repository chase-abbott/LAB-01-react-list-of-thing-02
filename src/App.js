import { Component } from 'react';
import Header from './Header';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import Footer from './Footer';
import { creatures } from './creatures.js';
import './App.css';
import React from 'react';


class App extends Component {
state = {
  creatures: creatures
}

  handleSearch = ({ nameFilter, sortField }) => {
    const creatureRegex = new RegExp(nameFilter, 'i');

    const newData = creatures
      .filter(c => {
        return !nameFilter || c.title.match(creatureRegex);
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
        <CreatureSearch onSearch={this.handleSearch}/>
        <main>
          <CreatureList creatures={creatures}/>
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
