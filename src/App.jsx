import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Shop/Product";
function App() {
  const [items, setitems] = useState([]);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const addProducts = (item) => {
    setitems((prevItems) => {
      const newItems = { ...prevItems };
      if (newItems[item.id]) {
        newItems[item.id] = {
          ...newItems[item.id],
          quantity: newItems[item.id].quantity + 1,
        };
      } else {
        newItems[item.id] = { ...item, quantity: 1 };
      }
      return newItems;
    });
    setCount((count) => count + 1);
    setPrice(price + item.price);
  };
  useEffect(() => {
    console.log(items); // Log after state updates
  }, [items]);
  useEffect(() => {
    console.log(count); // Log after state updates
  }, [count]);
  return (
    <Router>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        <div className="flex-auto">
          <Link to="/Product" className="btn btn-ghost text-xl">
            Products
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{count}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{count} Items</span>
                <span className="text-info">Subtotal: ${price}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    <Link to="/Cart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Product"
          element={<Product addProducts={addProducts} />}
        />
        <Route path="/Cart" element={<Cart items={items} />} />
      </Routes>
    </Router>
  );
}

export default App;
