import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "All" // Added state variable for type
    };
  }

  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  onFilter = (eventKey, event) => {
    this.setState({type: eventKey}); // Set state of type based on selected option
  }

  filterItem = (item) => {
    // Check if the item has a name property and it's not undefined
    if (!item.name) {
      return false;
    }
  
    if (this.state.type !== "All" && item.type !== this.state.type) {
      return false;
    }
  
    return item.name.toLowerCase().search(this.state.search) !== -1;
  }

  render() {
    const filteredItems = this.props.items.filter(this.filterItem);

    return (
      <div className="filter-list">
        <DropdownButton 
          title="Select Type" 
          id="type-dropdown" 
          onSelect={this.onFilter}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        <table className="items-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              {/* Add other column headers if needed */}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                {/* Add other item details if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FilteredList;
