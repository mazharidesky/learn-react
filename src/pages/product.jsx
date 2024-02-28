import { Fragment } from "react";
import CardProduct from "../component/Fragments/CardProduct";
import Button from "../component/Elements/Button";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Sepatu Super",
    price: "Rp 1.000.000",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem, impedit neque voluptatem quam facilis amet possimus ea quis non quia sit deleniti natus eveniet iusto nostrum tenetur cumque pariatur.",
  },
  {
    id: 2,
    image: "/images/vandal.png",
    name: "Vandal Origin",
    price: "Rp 500.000",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolorem,",
  },
  {
    id: 3,
    image: "/images/vandal.png",
    name: "Vandal Jelek",
    price: "Rp 500.000.000",
    description:
      "Vandal terjelek yang pernah ada di dunia, jangan beli ya, nanti nyesel.",
  },
];

const email = localStorage.getItem("email");

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
}

const ProductPage = () => {
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-slate-400 text-white px-10 items-center">
        {email}
        <Button classname="bg-red-500 ml-5" onClick={handleLogout}>Logout</Button>
        </div>
    <div className="flex justify-center py-5">
      {products.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}/>
        </CardProduct>
      ))}
    </div>
    </Fragment>
  );
};

export default ProductPage;
