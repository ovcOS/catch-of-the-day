import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    event.preventDefault(); 
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`)
  }
    render() {
        return (
           <form className="store-selector" onSubmit={this.goToStore}>
           <h2>Enter a store</h2>
           <input
           type="text"
           ref={this.myInput}
           placeholder="Store name"
           defaultValue={getFunName()}
           required/>
           <button type="submit">Create! </button>
           </form>
        )
    }
}

export default StorePicker;