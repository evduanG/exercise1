import React, { useState } from "react";
import "./App.css";
import Item from "./comppneta/Item";
import Cart from "./comppneta/Cart";

function App() {
  const [data, setData] = useState(
    // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l']
    [
      {
        id: 1,
        product_price: 10,
        product_name: "a",
      },
      {
        id: 2,
        product_price: 10,
        product_name: "b",
      },
      {
        id: 3,
        product_price: 10,
        product_name: "c",
      },
      {
        id: 4,
        product_price: 10,
        product_name: "d",
      },
      {
        id: 5,
        product_price: 10,
        product_name: "e",
      },
      {
        id: 6,
        product_price: 10,
        product_name: "f",
      },
      {
        id: 7,
        product_price: 10,
        product_name: "g",
      },
      {
        id: 8,
        product_price: 10,
        product_name: "h",
      },
      {
        id: 9,
        product_price: 10,
        product_name: "i",
      },
      {
        id: 10,
        product_price: 10,
        product_name: "k",
      },
      {
        id: 11,
        product_price: 10,
        product_name: "l",
      },
    ]
  );
  const [cartItems, setCartItems] = useState([]);
  function filterById(arrey, i_id) {
    return arrey.filter((elm) => elm.id === i_id);
  }

  function addNewItemToCartById(i_id) {
    const newItem = filterById(data, i_id);

    setCartItems([
      {
        id: newItem[0].id,
        product_price: newItem[0].product_price,
        product_name: newItem[0].product_name,
        quantity: 1,
      },
      ...cartItems,
    ]);
  }

  function renoveItmeById(i_id) {
    setCartItems([...cartItems.filter((element) => element.id !== i_id)]);
  }

  function incQuantityById(id) {
    const newCart = cartItems.map((element) => {
      if (element.id === id) {
        element.quantity += 1;
      }
      return element;
    });
  }
  function addToCartById(i_id) {
    filterById(cartItems, i_id).length === 0
      ? addNewItemToCartById(i_id)
      : incQuantityById(i_id);
  }

  function findQuantityById(id) {
    let element = filterById(cartItems, id);
    let quantity = 0;
    let havItme = element.length !== 0;

    if (havItme) {
      quantity = element[0].quantity;
    }

    return quantity;
  }

  return (
    <div className="App">
      <div className="grid">
        {data.map((elemnt) => (
          <Item
            key={elemnt.id}
            itemName={elemnt.product_name}
            id={elemnt.id}
            addToCartById={addToCartById}
            quantity={findQuantityById(elemnt.id)}
          ></Item>
        ))}
      </div>
      <Cart cartItems={cartItems} renoveItmeById={renoveItmeById} />
    </div>
  );
}

export default App;
