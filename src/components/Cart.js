import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=>store.cart.items);

    const dispatch = useDispatch();
    console.log(dispatch);

    const handleClearCart = () => {
        dispatch(clearCart());
    }


    return <div className="max-h-max">
        <div className="text-center text-2xl m-4 p-4">Cart</div>

        <div className="flex justify-center">
            <button className="bg-blue-700 border-2"
            onClick={handleClearCart}
            >Clear Cart</button>
        </div>

        <div className="flex justify-center">
            <div className="">
                <ItemList items={cartItems}/>
            </div>
        </div>

        {cartItems.length === 0 && <div className="flex justify-center"> <h1>Your Cart is Empty. Please add your Favourite Food item to the Cart</h1></div>}
    </div>
}

export default Cart;