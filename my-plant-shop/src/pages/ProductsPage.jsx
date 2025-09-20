import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 150, category: "Succulent", img: "/plants/aloe.jpg" },
  { id: 2, name: "Snake Plant", price: 200, category: "Succulent", img: "/plants/snake.jpg" },
  { id: 3, name: "Peace Lily", price: 250, category: "Flowering", img: "/plants/peace.jpg" },
  { id: 4, name: "Money Plant", price: 180, category: "Climber", img: "/plants/money.jpg" },
  { id: 5, name: "Fiddle Leaf Fig", price: 350, category: "Tree", img: "/plants/fiddle.jpg" },
  { id: 6, name: "Areca Palm", price: 400, category: "Tree", img: "/plants/areca.jpg" },
];

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Our Plants</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {plants.map((p) => {
          const inCart = cartItems.find((item) => item.id === p.id);
          return (
            <div key={p.id} style={{ border: "1px solid gray", padding: "1rem" }}>
              <img src={p.img} alt={p.name} width="150" />
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button disabled={!!inCart} onClick={() => dispatch(addToCart(p))}>
                {inCart ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
