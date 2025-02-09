// eslint-disable-next-line react/prop-types
export default function Cart({ items }) {
  return (
    <>
      <div className="cart text-3xl flex justify-center">Your Items</div>
      <div className="grid grid-cols-3 gap-10 ml-10">
        {Object.entries(items).map(([key, product]) => (
          <div
            key={key}
            className="product card bg-base-100 w-72 h-128 shadow-xl text-white p-4 rounded-lg 
            transition-transform duration-300 ease-in 
            hover:scale-105 hover:bg-base-600"
          >
            <figure>
              <img src={product.image} alt={product.id} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <div className="text-2xl">Quantity: {product.quantity}</div>

              <div className="text-3xl">Price: {product.price}$</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
