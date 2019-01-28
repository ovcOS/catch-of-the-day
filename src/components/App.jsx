import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish'

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  createFish = fish => {
    // 1. create a copy of existing state
    const fishesCopy = {...this.state.fishes};
    // 2. assign our new instance of fish into the above created copy, assigning it a key with a timestamp
    fishesCopy[`fish${Date.now()}`] = fish;
    // 3. set the new object to state
    this.setState({fishes: fishesCopy});
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  };

  addToOrder = (key) => {
    // 1. create a copy of state 
      const orderCopy = {...this.state.order}
    // 2. add fish into order or update if it's already been added
      orderCopy[key] = orderCopy[key] + 1 || 1;
    // 3. update state
      this.setState({ order: orderCopy })
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div>
            <Header tagline="Fresh seafood market"/>
            <ul>
              {Object.keys(this.state.fishes).map(key => (
                <Fish
                  key={key}
                  index={key}
                  attributeSendingProps={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />)
              )}
            </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory createFish={this.createFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
};

export default App;