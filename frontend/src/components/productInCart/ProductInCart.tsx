import './productInCart.scss'
const ProductInCart = (props) => {
    const { product } = props;
    return (
        <div className='productInCart'>
            <img src={`/images/products/${product.slug}.jpg`} />
            <a href={`/products/${product.slug}`} >{product.name}</a>
            <div className="quantity-settings">
                <i className="fa-solid fa-square-minus"></i>
                <b>{product.countInCart}</b>
                <i className="fa-solid fa-square-plus"></i>
            </div>
            <span>${product.price}</span>
            <i className="fa-solid fa-trash"></i>

        </div >
    )
}

export default ProductInCart