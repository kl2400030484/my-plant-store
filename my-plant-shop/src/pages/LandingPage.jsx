import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundImage: "url('/bg.jpg')", backgroundSize: "cover", height: "100vh" }}>
      <h1>GreenNest 🌱</h1>
      <p>Your one-stop shop for beautiful houseplants</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
