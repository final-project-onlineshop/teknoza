import { Container, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "./usersPage.scss";

const UsersPage = () => {
  return (
    <Container className="users-page">
      <Helmet>
        <title>Users</title>
      </Helmet>
      <h1>Users</h1>
      <Table className="text-center">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>IS ADMIN</th>
          <th colSpan={2}>ACTIONS</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Sevde</td>
            <td>svd@example.com</td>
            <td>YES</td>
            <td>
              <i className="fa-solid fa-pen text-primary"></i>
            </td>
            <td>
              <i className="fa-solid fa-trash text-danger"></i>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ömer</td>
            <td>omr@example.com</td>
            <td>NO</td>
            <td>
              <i className="fa-solid fa-pen text-primary"></i>
            </td>
            <td>
              <i className="fa-solid fa-trash text-danger"></i>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bekir</td>
            <td>bkr@example.com</td>
            <td>YES</td>
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

export default UsersPage;
