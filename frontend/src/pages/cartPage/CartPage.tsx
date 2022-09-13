import { Button, Container } from 'react-bootstrap'
import MessageBox from '../../components/messageBox/MessageBox'
import './cartPage.scss'

const CartPage = () => {
    return (
        <Container className='cart-screen'>
            <h2>Shopping Cart</h2>
            <div className="cart-body">
                <div className="products-in-cart">
                    <MessageBox><p>Cart is empty. <a href='/'>Go Shopping</a></p></MessageBox>
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