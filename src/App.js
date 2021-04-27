import { Component } from 'react';
import Header from './Header';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import Footer from './Footer';
import { creatures } from './creatures.js';
import './App.css';
import React from 'react';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <CreatureSearch/>
        <main>
          <CreatureList creatures={creatures}/>
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
