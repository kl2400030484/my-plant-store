import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, deleteItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      <p>Total Items: {totalQty}</p>
      <p>Total Cost: ₹{totalPrice}</p>

      {items.map((p) => (
        <div key={p.id} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
          <img src={p.img} alt={p.name} width="100" />
          <div>
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <p>Qty: {p.qty}</p>
            <button onClick={() => dispatch(increase(p.id))}>+</button>
            <button onClick={() => dispatch(decrease(p.id))}>-</button>
            <button onClick={() => dispatch(deleteItem(p.id))}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon!")}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
