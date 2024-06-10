import { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Table,
  Button,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    role: "",
    name: "",
    email: "",
    password: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setCurrentUser(user);
    setShow(true);
  };

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUsers(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  const handleSave = async () => {
    if (currentUser.id) {
      await axios.put(
        `http://localhost:5000/api/users/${currentUser.id}`,
        currentUser
      );
    } else {
      await axios.post("http://localhost:5000/api/users", currentUser);
    }
    fetchUsers();
    handleClose();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <div className="table-responsive overflow-x-auto">
        <div className="card text-bg-dark border border-secondary">
          <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
            <Row xs="2" md="3" className="g-2 align-items-center w-100">
              <Col lg="4">
                <h3 className="card-title">Data User</h3>
              </Col>
              <Col lg="4" xs="12" className="order-last order-md-0">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-end-0"
                    placeholder="Search Users..."
                  />
                  <Button
                    variant="warning"
                    className="input-group-text rounded-start-0"
                    size="sm"
                  >
                    <i className="ri-search-line"></i>
                  </Button>
                </div>
              </Col>
              <Col lg="4" className="text-end">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() =>
                    handleShow({
                      id: "",
                      role: "",
                      name: "",
                      email: "",
                      password: "",
                    })
                  }
                >
                  Add User
                </Button>
              </Col>
            </Row>
          </div>
          <div className="card-body border-top border-secondary table-responsive">
            <Table
              striped
              bordered
              hover
              id="tableUser"
              className="table-dark p-3 text-center"
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Role</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.role}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <Button variant="info" onClick={() => handleShow(user)}>
                        View/Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="text-dark">
        <Modal.Header closeButton>
          <Modal.Title>{currentUser.id ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formRole" className="mb-2">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                value={currentUser.role}
                placeholder="Masukkan Role Anda ..."
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, role: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formName" className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentUser.name}
                placeholder="Masukkan Nama Anda ..."
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-2">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={currentUser.email}
                placeholder="Masukkan Email Anda ..."
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={currentUser.password}
                placeholder="Masukkan Password Anda ..."
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Users;
