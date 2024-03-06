import { Fragment, useState } from "react";
import CardProduct from "../component/Fragments/CardProduct";
import Button from "../component/Elements/Button";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Sepatu Super",
    price: 1000000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem, impedit neque voluptatem quam facilis amet possimus ea quis non quia sit deleniti natus eveniet iusto nostrum tenetur cumque pariatur.",
  },
  {
    id: 2,
    image: "/images/vandal.png",
    name: "Vandal Origin",
    price: 5000000,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem,",
  },
  {
    id: 3,
    image: "/images/vandal.png",
    name: "Vandal Jelek",
    price: 10000000,
    description:
      "Vandal terjelek yang pernah ada di dunia, jangan beli ya, nanti nyesel.",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="flex justify-between h-20 bg-slate-400 text-white px-10 items-center">
        <h1 className="text-xl font-bold ">Sky Commerce</h1>
        <nav>
          <div>
            <ul className="flex gap-5 font-semibold text-medium">
              <li>Home</li>
              <li>New Product</li>
              <li>About us</li>
            </ul>
          </div>
        </nav>
        <div>
          {email}
          <Button classname="bg-red-500 ml-5" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="font-bold text-3xl text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
