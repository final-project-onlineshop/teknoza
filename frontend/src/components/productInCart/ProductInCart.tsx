
import "./productInCart.scss";
const ProductInCart = (props) => {
  const { product } = props;
  return (
    <div className="productInCart">
      {/* TODO: implement Bootstrap-ListGroup */}
      <img src={`/images/products/${product.slug}.jpg`} />
      <a href={`/products/${product.slug}`}>{product.name}</a>
      <div className="quantity-settings">
        {!props.uneditable && <i className="fa-solid fa-square-minus"></i>}
        <b>{product.countInCart}</b>
        {!props.uneditable && <i className="fa-solid fa-square-plus"></i>}
      </div>
      <span>${product.price}</span>
      {!props.uneditable && <i className="fa-solid fa-trash"></i>}
    </div>
  );
};

export default ProductInCart;
