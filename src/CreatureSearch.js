import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField : '',
  }

  handleNamerFilter = ({ target }) => {
    this.setState({ nameFilter : target.value });
  }

  handleSortField = ({ target }) => {
    this.setState({ sortField : target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    const { nameFilter, sortField } = this.state;
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

        <button>✔</button>
      </form>
    
    );
  }

}
