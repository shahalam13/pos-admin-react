import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  FormGroup,
  Label,
  Button,
  Table,
} from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: {},
      salesArr: [],
      productList: [
        { id: 1, name: "Oppo F1", quantity: 0, price: 12000, subtotal: 0 },
        { id: 2, name: "Dell e7440", quantity: 0, price: 30000, subtotal: 0 },
        { id: 3, name: "Sony F1", quantity: 0, price: 40000, subtotal: 0 },
      ],
      breadcrumbItems: [
        { title: "Bronox", link: "#" },
        { title: "Forms", link: "#" },
        { title: "Form Validation", link: "#" },
      ],
    };
  }

  componentDidMount() {
    this.props.setBreadcrumbItems(
      "Form Validation",
      this.state.breadcrumbItems
    );
  }

  handleChange = (event) => {
    const id = event.target.value;
    const product = this.state.productList.find((u) => u.id == id);

    this.setState(
      {
        salesArr: [...this.state.salesArr, product],
      },
      () => console.log("ok")
    );

    //console.log(this.state.salesArr);
  };

  deleteFromSales = (index) => {
    this.state.salesArr.splice(index, 1);
    this.forceUpdate();
  };

  inputChangedHandler = (event, id, index) => {
    let product = this.state.productList.find((u) => u.id == id);
    product.quantity = event.target.value;

    this.state.salesArr[index].quantity = product.quantity;
    this.state.salesArr[index].subtotal = product.quantity * product.price;

    this.forceUpdate();

    // this.setState({
    //   values: { ...this.state.values, ev },
    // });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">Adjust Product</h4>

                  <Link
                    type="button"
                    to="adjustment-list"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Back to adjustment list
                  </Link>
                </div>

                <AvForm>
                  <Row>
                    <Col lg="4">
                      <AvField
                        name="ref_no"
                        label="Reference No"
                        placeholder="1234"
                        type="text"
                        errorMessage="Invalid product name"
                        validate={{ required: { value: true } }}
                      />
                    </Col>

                    <Col lg="4">
                      <FormGroup>
                        <Label>Select Adjustment Type</Label>
                        <div>
                          <select className="form-control">
                            <option>Select</option>
                            <option>Stock In</option>
                            <option>Stock Out</option>
                            <option>Damage</option>
                          </select>
                        </div>
                      </FormGroup>
                    </Col>

                    <Col lg="4">
                      <FormGroup>
                        <Label>Select Shop</Label>
                        <div>
                          <select className="form-control">
                            <option>Select</option>
                            <option>Awesome Shop 2</option>
                            <option>Old Shop</option>
                          </select>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <hr />
                  <br />
                  <br />
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <Label>Select Product</Label>
                          <select
                            className="form-control"
                            style={{ width: "90%" }}
                            value={this.state.selectValue}
                            onChange={this.handleChange}
                          >
                            <option>Select</option>

                            {this.state.productList.map((r, i) => (
                              <option key={i} value={r.id}>
                                {r.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </FormGroup>

                      <div className="table-responsive">
                        <Table className="table mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Subtotal</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.salesArr.length
                              ? this.state.salesArr.map((value, index) => (
                                  <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.price}</td>
                                    <td>
                                      <input
                                        value={value.quantity}
                                        onChange={(event) =>
                                          this.inputChangedHandler(
                                            event,
                                            value.id,
                                            index
                                          )
                                        }
                                        type="number"
                                      ></input>
                                    </td>
                                    <td>{value.subtotal}</td>
                                    <td>
                                      <i
                                        style={{
                                          fontSize: 20 + "px",
                                          cursor: "pointer",
                                        }}
                                        className="mdi mdi-delete"
                                        onClick={() =>
                                          this.deleteFromSales(index)
                                        }
                                      ></i>
                                    </td>
                                  </tr>
                                ))
                              : null}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <br />
                  <hr />
                  <Row>
                    <Col lg="12">
                      <FormGroup>
                        <Label>Description</Label>
                        <div>
                          <textarea
                            required
                            className="form-control"
                            rows="5"
                          ></textarea>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />

                  <FormGroup className="mb-0">
                    <div>
                      <Button
                        type="submit"
                        color="primary"
                        className="waves-effect waves-light mr-1"
                      >
                        Submit
                      </Button>
                      <Button
                        type="reset"
                        color="secondary"
                        className="waves-effect"
                      >
                        Cancel
                      </Button>
                    </div>
                  </FormGroup>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(AddProduct);
