import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  
  render() {
    return (
      <form className="CreatureSearch">

        <input></input>

        <select>
          <option value=""> sort.. </option>
          <option value="name"> name </option>
          <option value="horns"> horns </option>
        </select>

        <button>✔</button>
      </form>
    
    );
  }

}
