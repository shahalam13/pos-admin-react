import React, { Component } from "react";
import { Col, Row, Card, CardBody, FormGroup, Label, Button } from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col lg="6">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">Add new product</h4>

                  <Link
                    type="button"
                    to="product-list"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Back to product list
                  </Link>
                </div>

                <AvForm>
                  <AvField
                    name="name"
                    label="Name"
                    placeholder="Example product"
                    type="text"
                    errorMessage="Invalid product name"
                    validate={{ required: { value: true } }}
                  />

                  <AvField
                    name="code"
                    label="Code"
                    placeholder="Enter product code"
                    type="text"
                    errorMessage="Invalid Code"
                    validate={{
                      required: { value: true },
                      email: { value: true },
                    }}
                  />

                  <FormGroup>
                    <Label>Select Category</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Laptop</option>
                        <option>Phone</option>
                        <option>Furniture</option>
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label>Select Brand</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Sony</option>
                        <option>Dell</option>
                        <option>Oppo</option>
                      </select>
                    </div>
                  </FormGroup>

                  <AvField
                    name="p_price"
                    label="Purchase Price"
                    placeholder="Enter product purchase price"
                    type="number"
                    errorMessage="Invalid Price"
                    validate={{
                      required: { value: true },
                      email: { value: true },
                    }}
                  />

                  <AvField
                    name="sell_price"
                    label="Sale Price"
                    placeholder="Enter product selling price"
                    type="number"
                    errorMessage="Invalid Price"
                    validate={{
                      required: { value: true },
                      email: { value: true },
                    }}
                  />
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
