import React from 'react';
import { useCart, useDispatchCart } from './contextReducer';

export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='empty-cart-message'>The Cart is Empty!</div>
      </div>
    );
  }
  const handleCheckOut = async () => {
    const userEmail = localStorage.getItem("userEmail");
    
    try {
      const response = await fetch('http://localhost:5000/api/orderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });
      if (response.ok) {
        dispatch({ type: 'DROP' });
        console.log('Checkout successful');
      } else {
        const errorMessage = await response.text();
        throw new Error(`Checkout failed with status ${response.status}: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Checkout failed:', error.message);
      // Handle error (e.g., show error message to the user)
    }
  };
  

  const totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className='cart-container'>
      <div className='cart-items'>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Option</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button className='remove-button' onClick={() => dispatch({ type: 'REMOVE', index: index })}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='total-price'>Total Price: {totalPrice}/-</div>
      <button className='checkout-button' onClick={handleCheckOut}>Check Out</button>
    </div>
  );
}
