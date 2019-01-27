import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
           <form className="store-selector">
           <h2>Enter a store</h2>
           <input type="text" placeholder="Store name" defaultValue={getFunName()} required/>
           <button type="submit">Create! </button>
           </form>
        )
    }
}

export default StorePicker;