import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow m-2">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg w-full h-64 object-cover object-center"
      />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-s text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (porps) => {
  const { price } = porps;
  return (
    <div className="flex justify-between items-center px-5 pb-5 ">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button classname="bg-blue-600">Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
