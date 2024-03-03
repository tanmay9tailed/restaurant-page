import React, { useEffect, useRef, useState } from "react";
import "./card.css";
import { useDispatchCart, useCart } from "../contextReducer";

const Card = (props) => {
  const priceRef = useRef();
  const dispatch = useDispatchCart(); // Corrected declaration of dispatch
  const data = useCart(); // Corrected declaration of data
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = []; // Initialize food as null
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }
    if (food !== null) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
        return;
      } else if (food.size !== size) { // Corrected condition here
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          img: props.foodItem.img,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      img: props.foodItem.img,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  let finalPrice = qty * parseInt(options[size]);

  return (
    <div className="food-card">
      <div className="image">
        <img src={props.foodItem.img} alt="" height={150} width={200} />{" "}
      </div>
      <div className="title">{props.foodItem.name}</div>
      <div className="card-mid">
        <div className="quantity">
          <select
            name=""
            id=""
            onChange={(e) => setQty(parseInt(e.target.value))} // Parse value to integer
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="full/half">
          <select name="" id="" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
            {priceOptions.map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="total-price">&#8377;{finalPrice}/-</div>{" "}
      {/* Calculate total price */}
      <button className="addtocart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
