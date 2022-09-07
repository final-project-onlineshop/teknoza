import './homePage.scss'
import data from '../data.js';
import { Link } from 'react-router-dom';
import { Card, Container, Stack } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div className='homePage'>
            <h1>Featured Products</h1>
            <div className="products">
                {data.products.map((product) => {

                    return (

                        <Card key={product.slug} style={{ width: "18rem" }}>
                            <Link to={`/product/${product.slug}`}>
                                <Card.Img variant="top" src={`/images/products/${product.slug}.jpg`} />
                            </Link>
                            <Card.Body>
                                <Link to={`/product/${product.slug}`}><Card.Title>{product.name}</Card.Title></Link>

                                <p><strong>{`${product.price} €`}</strong></p>
                                <button>Add to cart</button>

                            </Card.Body>
                        </Card>

                    )
                })}
            </div>
        </div>
    )
}

export default HomePage