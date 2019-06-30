import React from "react";
import logo from "./logo.svg";
import "./App.css";

export class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        order: 1,
        name: "item 1"
      },
      {
        id: 2,
        order: 2,
        name: "item 2"
      },
      {
        id: 3,
        order: 3,
        name: "item 3"
      },
      {
        id: 4,
        order: 4,
        name: "item 4"
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <div className="card">
          {this.state.items.length > 0 ? (
            this.state.items.map((item, index) => <div className="item">{item.name}</div>)
          ) : (
            <div className="item">no row</div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
