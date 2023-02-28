import MenuButtons from "./MenuButtons";
import "./Item.css";

const Item = ({ id, addToCartById, quantity, itemName, renoveItmeById }) => {
  const addToCart = () => {
    addToCartById(id);
  };

  return (
    <div className="Item">
      {itemName}
      <MenuButtons
        addToCartCB={addToCart}
        quantity={quantity}
        id={id}
        renoveItmeById={renoveItmeById}
        name={itemName}
      />
    </div>
  );
};
export default Item;
