import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  const fetchCustomers = async () => {
    const response = await axios.get("http://localhost:5000/api/customers");
    setCustomers(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/customers/${id}`);
    fetchCustomers();
  };

  useEffect(() => {
    fetchCustomers();
  }, []);
  return (
    <Container>
      <div className="table-responsive overflow-x-auto">
        <div className="card text-bg-dark border border-secondary">
          <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
            <Row xs="2" md="3" className="g-2 align-items-center w-100">
              <Col lg="4">
                <h3 className="card-title">Data Customers</h3>
              </Col>
              <Col lg="4" xs="12" className="order-last order-md-0">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control form-control-sm rounded-end-0"
                    placeholder="search customers ..."
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
                  onClick={() => navigate(`add`)}
                >
                  Add Customers
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
                  <th>Image</th>
                  <th>Name</th>
                  <th>No. Telp</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => (
                  <tr key={customer.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={customer.image}
                        alt={customer.name}
                        className="img-thumbnail"
                        width="100"
                      />
                    </td>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.gender}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <Button
                        variant="info"
                      >
                        Detail
                      </Button>

                      <Button
                        variant="warning"
                        onClick={() =>
                          navigate(`/edit/${customer.id}`, {
                            state: { customer },
                          })
                        }
                      >
                        Edit
                      </Button>

                      <Button
                        variant="danger"
                        onClick={() => handleDelete(customer.id)}
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
    </Container>
  );
};

export default Customers;
