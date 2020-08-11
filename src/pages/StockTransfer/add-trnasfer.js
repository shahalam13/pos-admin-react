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
import Select from "react-select";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: null,
      salesArr: [],
      options: [
        { value: 1, label: "Oppo F1", quantity: 0, price: 12000, subtotal: 0 },
        {
          value: 2,
          label: "Dell e7440",
          quantity: 0,
          price: 30000,
          subtotal: 0,
        },
        { value: 3, label: "Sony F1", quantity: 0, price: 40000, subtotal: 0 },
      ],
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

  handleChange = (product) => {
    this.setState(
      {
        salesArr: [...this.state.salesArr, product],
        selectValue: product,
      },
      () => {}
    );
  };

  inputChangedHandler = (event, id, index) => {
    let product = this.state.productList.find((u) => u.id === id);
    product.quantity = event.target.value;

    let items = [...this.state.salesArr];
    let item = { ...items[index] };
    item.quantity = event.target.value;
    item.subtotal = item.quantity * item.price;
    items[index] = item;
    this.setState({ salesArr: items });
  };

  // handleChange = (event) => {
  //   const id = event.target.value;
  //   const product = this.state.productList.find((u) => u.id == id);

  //   this.setState(
  //     {
  //       salesArr: [...this.state.salesArr, product],
  //     },
  //     () => console.log("ok")
  //   );

  // };

  deleteFromSales = (index) => {
    this.state.salesArr.splice(index, 1);
    this.forceUpdate();
  };

  // inputChangedHandler = (event, id, index) => {
  //   let product = this.state.productList.find((u) => u.id == id);
  //   product.quantity = event.target.value;

  //   this.state.salesArr[index].quantity = product.quantity;
  //   this.state.salesArr[index].subtotal = product.quantity * product.price;

  //   this.forceUpdate();

  // };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">Transfer Product</h4>

                  <Link
                    type="button"
                    to="transfer-list"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Back to transfer list
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
                        <Label>Select Location(From)</Label>
                        <div>
                          <select className="form-control">
                            <option>Select</option>
                            <option>Awesome Shop</option>
                            <option>New Shop</option>
                          </select>
                        </div>
                      </FormGroup>
                    </Col>

                    <Col lg="4">
                      <FormGroup>
                        <Label>Select Location(To)</Label>
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
                          <Select
                            className="mt-4 col-md-8 col-offset-4"
                            options={this.state.options}
                            value={this.state.selectValue}
                            onChange={this.handleChange}
                            placeholder={"Select a product"}
                          />
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
                                            value.value,
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
                    <Col lg="6">
                      <AvField
                        name="total"
                        label="Total Price"
                        placeholder="1200"
                        type="number"
                        errorMessage="Invalid Price"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                      />
                    </Col>
                    <Col lg="6">
                      <AvField
                        name="charge"
                        label="Shipping Charge"
                        placeholder="00"
                        type="number"
                        errorMessage="Invalid Charge"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                      />
                    </Col>
                  </Row>

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
