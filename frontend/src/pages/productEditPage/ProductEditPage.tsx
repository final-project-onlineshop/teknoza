import { Button, Container, Form, ListGroup } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import "./productEditPage.scss";

const ProductEditPage = () => {
  const params = useParams();
  const { productId } = params;
  return (
    <Container>
      <Helmet>
        <title>Edit Product</title>
      </Helmet>
      <h1>Edit Product : {productId}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control value={"HP Curved Monitor"} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="slug">
          <Form.Label>Slug</Form.Label>
          <Form.Control value={"hp-curved-monitor"} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control value={"150"} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image-file-address">
          <Form.Label>Image File Address</Form.Label>
          <Form.Control value={"/images/monitor1.jpg"} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image-file-upload">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="additionalImages">
          <Form.Label>Additional Images</Form.Label>
          <ListGroup variant="flush">
            <ListGroup.Item>
              image 1
              <Button variant="light">
                <i className="fa fa-times-circle"></i>
              </Button>
              image 2
              <Button variant="light">
                <i className="fa fa-times-circle"></i>
              </Button>
              image 3
              <Button variant="light">
                <i className="fa fa-times-circle"></i>
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="additional-image-file-upload">
          <Form.Label>Upload Additional Image</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control value={"Monitors"} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control value={"HP"} required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="count-in-stock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control value={"10"} required />
        </Form.Group>{" "}
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control value={"Eye-friendly Monitor"} required />
        </Form.Group>
        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
};

export default ProductEditPage;
