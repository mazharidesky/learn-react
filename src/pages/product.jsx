import CardProduct from "../component/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Super">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          dolorem, impedit neque voluptatem quam facilis amet possimus ea quis
          non quia sit deleniti natus eveniet iusto nostrum tenetur cumque
          pariatur.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 100.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/vandal.png" />
        <CardProduct.Body title="Vandal Origin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          dolorem, impedit neque voluptatem quam facilis amet possimus ea quis
          non quia sit deleniti natus eveniet iusto nostrum tenetur cumque
          pariatur.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 100.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
