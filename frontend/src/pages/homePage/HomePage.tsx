import './homePage.scss'

import { Link } from 'react-router-dom';
import { Card, Container, Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const dataFromApi = await axios.get('http://localhost:3048/api/products');
            setProducts(dataFromApi.data);
        };
        fetchData();
    }, [])
    return (
        <div className='homePage'>
            <h1>Featured Products</h1>
            <div className="products">
                {products.map((product) => {

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