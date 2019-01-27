import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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
  }
    render() {
        return (
            <div className="catch-of-the-day">
                <div>
                    <Header tagline="Fresh seafood market"/>
                </div>
                <Order />
                <Inventory createFish={this.createFish} />
            </div>
        )
    }
};

export default App;