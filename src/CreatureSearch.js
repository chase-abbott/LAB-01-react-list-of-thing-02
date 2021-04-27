import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField : '',
    typeSort: '',
  }

  handleNamerFilter = ({ target }) => {
    this.setState({ nameFilter : target.value });
  }

  handleSortField = ({ target }) => {
    this.setState({ sortField : target.value });
  }

  handleTypeSort = ({ target }) => {
    this.setState({ typeSort : target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    const { nameFilter, sortField, typeSort } = this.state;
    return (
      <form 
        className="CreatureSearch"
        onSubmit={this.handleSubmit}
      >

        <input
          name="nameFilter"
          value={nameFilter}
          onChange={this.handleNamerFilter}
        />

        <select 
          name="sortField"
          value={sortField}
          onChange={this.handleSortField}
        >
          <option value=""> sort.. </option>
          <option value="name"> name </option>
          <option value="horns"> horns </option>
        </select>

        <select 
          name="typeSort"
          value={typeSort}
          onChange={this.handleTypeSort}
        >
          <option value=""> type.. </option>
          <option value="narwhal"> narwhal </option>
          <option value="rhino"> rhino </option>
          <option value="unicorn"> unicorn </option>
          <option value="unilego"> unilego </option>
          <option value="triceratops"> triceratops </option>
          <option value="markhor"> markhor </option>
          <option value="mouflon"> mouflon </option>
          <option value="chameleon"> chameleon </option>
          <option value="lizard"> lizard </option>
          <option value="dragon"> dragon </option>
        </select>

        <button>✔</button>
      </form>
    
    );
  }

}
