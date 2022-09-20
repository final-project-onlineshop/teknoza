import { Card, Col, Container, Row } from "react-bootstrap";
import Chart from "react-google-charts";
import "./dashboard.scss";

const DashboardPage = () => {
  return (
    <Container className="dashboard-page">
      <h1>Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>21</Card.Title>
              <Card.Text> Users</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>9</Card.Title>
              <Card.Text> Orders</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>$ 847</Card.Title>
              <Card.Text> Orders</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="sales-report my-3">
        <h2>Sales</h2>
        <Chart
          width="100%"
          height="400px"
          chartType="AreaChart"
          loader={<div>"Loading Chart..."</div>}
          data={[
            ["Date", "Sales"],
            [1, 221],
            [7, 2],
            [23, 2292],
          ]}
        />
      </div>
      <div className="categories-report my-3">
        <h2>Categories</h2>
        <Chart
          width="100%"
          height="400px"
          chartType="PieChart"
          loader={<div>"Loading Chart..."</div>}
          data={[
            ["Category", "Products"],
            ["Monitor", 221],
            ["Keyboard", 2],
            ["Cable", 2292],
          ]}
        />
      </div>
    </Container>
  );
};

export default DashboardPage;
