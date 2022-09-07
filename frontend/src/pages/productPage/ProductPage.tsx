import './productPage.scss'
import { useParams } from 'react-router-dom';


const ProductPage = () => {
    const params = useParams();
    const { slug } = params;
    return (
        <div><h1>Product :{slug}</h1> </div>
    )
}

export default ProductPage