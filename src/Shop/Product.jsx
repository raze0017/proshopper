import { useState } from "react";
import { useEffect } from "react";
// eslint-disable-next-line react/prop-types
export default function Product({ addProducts }) {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network error");
        }
        const data = await response.json();
        setProd(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <>
        <div className="loading flex justify-center align-center">Loading</div>
      </>
    );
  }
  if (error) {
    <>
      <div className="error">Error{error}</div>
    </>;
  }
  const addProductss = (item) => {
    const newItem = {
      id: item.id,
      name: item.title,
      image: item.image,
      price: item.price,
    };
    addProducts(newItem);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-10 ml-10">
        {prod.map((product) => (
          <div
            onClick={() => addProductss(product)}
            key={product.id}
            className="product card bg-base-100 w-48 h-128 shadow-xl text-white p-4 rounded-lg 
            transition-transform duration-300 ease-in 
            hover:scale-105 hover:bg-base-600"
          >
            <figure>
              <img src={product.image} alt={product.id} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>

              <div className="text-3xl">{product.price}$</div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
