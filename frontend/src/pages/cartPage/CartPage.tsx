import { Button, Container } from 'react-bootstrap'
import MessageBox from '../../components/messageBox/MessageBox'
import ProductInCart from '../../components/productInCart/ProductInCart';
import './cartPage.scss'

//TODO:delete after testing
const productsInCart = [
    {
        name: "HP Curved Monitor",
        slug: "hp-curved-monitor", price: 150,
        countInStock: 10,
        countInCart: 2
    }, {
        name: "Microsoft Wireless Keyboard",
        slug: "microsoft-wireless-keyboard", price: 30,
        countInStock: 1,
        countInCart: 1
    }
];

const CartPage = () => {
    return (
        <Container className='cart-screen'>
            <h2>Shopping Cart</h2>
            <div className="cart-body">
                <div className="products-in-cart">
                    {productsInCart.length == 0 ?
                        <MessageBox><p>Cart is empty. <a href='/'>Go Shopping</a></p></MessageBox>
                        :
                        productsInCart.map((productInCart, index) => {
                            return (<ProductInCart product={productInCart} />)
                        })
                    }

                </div>
                <div className="cart-details-box">
                    <div className="subtotal">
                        <span>Subtotal (0 items) : $0 </span>
                    </div>
                    <div className="checkout-button">
                        <Button>Proceed to Checkout</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CartPage