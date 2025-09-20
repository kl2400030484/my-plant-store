import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state) => state.cart.items.reduce((sum, i) => sum + i.qty, 0));

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#eee" }}>
      <h2>GreenNest</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}
