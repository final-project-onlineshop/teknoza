import { Button, Container, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./productsPage.scss";

const ProductsPage = () => {
  return (
    <Container className="products-page">
      <Helmet>
        <title>Products</title>
      </Helmet>
      <h1>Products</h1>
      <Button className="create-product-button">
        <i className="fa-solid fa-plus "></i> Create Product
      </Button>
      <Table className="text-center my-3">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
          <th>BRAND</th>
          <th colSpan={2}>ACTIONS</th>
        </thead>
        <tbody>
          <tr>
            <td>63297a2756f70e3aaf0fa286</td>
            <td>HP Curved Monitor</td>
            <td>150</td>
            <td>Monitors</td>
            <td>HP</td>
            <td>
              <i className="fa-solid fa-pen text-primary"></i>
            </td>
            <td>
              <i className="fa-solid fa-trash text-danger"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductsPage;
