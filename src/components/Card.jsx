import React, {useContext} from "react";
import {Context} from '../context/context'

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '20px',
  margin: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
};

const imageStyle = {
  width: '100%',
  marginBottom: '10px',
  borderRadius: '4px',
};

const contentContainer = {
  display: 'flex',
  justifyContent: 'space-between',
};

const contentStyle = {
  fontSize: '1em',
};

const Card = ({ name, price }) => {
  const {addToCart} = useContext(Context)
  return (
    <div style={cardStyle} onClick={() => addToCart(name, price)}>
      <img
        src="https://via.placeholder.com/300"
        alt="Placeholder"
        style={imageStyle}
      />
      <div style={contentContainer}>
        <h4 style={contentStyle}>{name}</h4>
        <h3 style={contentStyle}>{price}</h3>
      </div>
    </div>
  );
};

export default Card;
