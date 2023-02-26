
import MenuButtons from "./MenuButtons";

const Item =(props)=>{
    const addToCart =()=> {
        props.addToCartById(props.id);
        console.log("addToCartById is click id: " +props.id)
    } 
    // const temp = ()=> {}
    return  <div className  = "Item">
        {props.itemName}
        <MenuButtons addToCartCB ={addToCart}  />
        </div>
}
export default Item;