import { Button, Container, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./ordersPage.scss";

const OrdersPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Orders</title>
      </Helmet>
      <h1>Orders </h1>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>USER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6322fd58f8048198f4a65815</td>
            <td>max5124</td>
            <td>2022-09-15</td>
            <td>$ 112.35</td>
            <td>No</td>
            <td>No</td>
            <td>
              <Button>Details</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default OrdersPage;
