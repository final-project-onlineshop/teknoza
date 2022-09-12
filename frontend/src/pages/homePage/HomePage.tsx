import './homePage.scss'

import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Product from '../../components/Product'


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

                <Row>
                    {products.map((product) => {
                        return (
                            <Col key={product.slug} sm={6} md={4} lg={3} className='mb-3' >
                                <Product product={product}></Product>
                            </Col>
                        )})}
                </Row>
            </div>
        </div>
    )
}

export default HomePage