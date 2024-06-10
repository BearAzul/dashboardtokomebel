import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Category = () => {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({
    id: "",
    name: "",
    status: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = (category) => {
    setCurrentCategory(category);
    setShow(true);
  };
  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:5000/api/categories");
    setCategories(response.data);
  };

  const handleSave = async () => {
    if (currentCategory.id) { 
      await axios.put(
        `http://localhost:5000/api/categories/${currentCategory.id}`,
        currentCategory
      );
    } else {
      await axios.post("http://localhost:5000/api/categories", currentCategory);
    }
    fetchCategories();
    handleClose();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/categories/${id}`);
    fetchCategories();
  };

  return (
    <Container>
      <div className="table-responsive overflow-x-auto">
        <div className="card text-bg-dark border border-secondary">
          <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
            <Row xs="2" md="3" className="g-2 align-items-center w-100">
              <Col lg="4">
                <h3 className="card-title">Data Category</h3>
              </Col>
              <Col lg="4" xs="12" className="order-last order-md-0">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-end-0"
                    placeholder="search categories ..."
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
                      name: "",
                      status: "",
                    })
                  }
                >
                  Add Category
                </Button>
              </Col>
            </Row>
          </div>
          <div className="card-body border-top border-secondary table-responsive">
            <Table
              striped
              bordered
              hover
              className="table-dark p-3 text-center"
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Category</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category.id}>
                    <td>{index + 1}</td>
                    <td>{category.name}</td>
                    <td>{category.status}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="info"
                        onClick={() => handleShow(category)}
                      >
                        View/Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(category.id)}
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
          <Modal.Title>
            {currentCategory.id ? "Edit Category" : "Add Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCategory" className="mb-2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={""}
                placeholder="Masukkan Category ..."
                onChange={() => ""}
              />
            </Form.Group>
            <Form.Group controlId="formStats" className="mb-2">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option selected disabled>-- status category --</option>
                <option value="active">Active</option>
                <option value="active">Non-Active</option>
              </Form.Select>
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

export default Category;
