import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return <li>Sorry, {fish ? fish.name : 'fish'} is not available</li>
    }
    return (
      <li key={key}>
        {count} lb of {fish.name}
        {formatPrice(fish.price * count)}
      </li>
    )
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((sum, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return sum + (fish.price * count);
      } else {
        return sum;
      }
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(id => this.renderOrder(id))}
        </ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

export default Order;