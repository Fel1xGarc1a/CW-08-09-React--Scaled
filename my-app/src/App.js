import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
// Assuming you have a FilteredList component
import FilteredList from './FilteredList';

class App extends Component {
    render() {
        // Creating a produce list
        const produceList =
        [
         {name: "Apple", type: "Fruit"},
         {name: "Pineapple", type: "Fruit"} ,
         {name: "Banana", type: "Fruit"},
         {name: "Pear", type: "Fruit"},
         {name: "Strawberry", type: "Fruit"},
         {name: "Orange", type: "Fruit"},
         {name: "Lettuce", type: "Vegetable"},
         {name: "Cucumber", type: "Vegetable"},
         {name: "Eggplant", type: "Vegetable"},
         {name: "Squash", type: "Vegetable"},
         {name: "Bell pepper", type: "Vegetable"},
         {name: "Onion", type: "Vegetable"},
        ]; 

        return (
            <div className="App">
                <HelloWorld name={'Felix'}/>

                {/* Creating an instance of the Counter Component */}
                <Counter />

                {/* Creating an instance of the FilteredList Component with a variable named items that takes in your produce list */}
                <FilteredList items={produceList} />
            </div>
        );
    }
}

export default App;
