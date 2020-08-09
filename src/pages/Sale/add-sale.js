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
                  <h4 className="card-title">Sale product</h4>

                  <Link
                    type="button"
                    to="sales-list"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Back to sales list
                  </Link>
                </div>

                <AvForm>
                  <AvField
                    name="ref_no"
                    label="Reference No"
                    placeholder="1234"
                    type="text"
                    errorMessage="Invalid product name"
                    validate={{ required: { value: true } }}
                  />

                  <FormGroup>
                    <Label>Select Customer</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Mahmud</option>
                        <option>Fahim</option>
                        <option>Rubel</option>
                      </select>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label>Select Status</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Received</option>
                        <option>Pending</option>
                        <option>Waiting</option>
                      </select>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label>Select Payment Status</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Paid</option>
                        <option>Due</option>
                        <option>Partial</option>
                      </select>
                    </div>
                  </FormGroup>

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

                  <AvField
                    name="due"
                    label="Payment Due"
                    placeholder="500"
                    type="number"
                    errorMessage="Invalid Due"
                    validate={{
                      required: { value: true },
                      email: { value: true },
                    }}
                  />
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
