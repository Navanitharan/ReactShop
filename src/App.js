import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card.jsx";
import Navbar from './Nav.jsx';
import Header from './header.jsx';
import { useState } from 'react';

function App() {
  let products = [{
    id:1,
    productName:"Fancy Product",
    price:"$40.00 - $80.00",
    sale:false
  },
  {
    id:2,
    productName:"Special Item",
    sale:true,
    price:"$20.00",
    salePrice:"$18.00",
    rating:"5"
  },
  {
    id:3,
    productName:"Sale Item",
    sale:true,
    price:"$50.00",
    salePrice:"$25.00",
  },
  {
    id:4,
    productName:"Popular Item",
    sale:false,
    price:"$40.00",
    rating:"5"
  },
  {
    id:5,
    productName:"Sale Item",
    sale:true,
    price:"$50.00",
    salePrice:"$25.00",
  },
  {
    id:6,
    productName:"Fancy Item",
    sale:false,
    price:"$120.00 - $280.00",
    rating:"5"
  },
  {
    id:7,
    productName:"Special Item",
    sale:true,
    price:"$20.00",
    salePrice:"$18.00",
    rating:"5"
  },
  {
    id:8,
    productName:"Popular Item",
    sale:false,
    price:"$40.00",
    rating:"5"
  },
  ];

let addToCart = (item) => {
  setCartItem([...cartItems, item.id]);
}
let removeFromCart = (item) => {
  let newArray = cartItems.filter((i)=>{
    return i !== item.id;
  })
  setCartItem(newArray);
}
const [cartItems,setCartItem] = useState([]);

  return (
    <div className="">
    <Navbar cart = {cartItems.length}></Navbar>
    <Header></Header>
    <div className="App container mt-5">
      <div className='Products-container justify-content-center row gap-3'>
        {products.map((product,index)=>{
          return <Card key={index} productDetails ={product} addToCart={addToCart} removeFromCart={removeFromCart} items={cartItems}></Card>
        })}
      </div>
    </div>
    </div>
  );
}

export default App;