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
                  <AvField
                    name="ref_no"
                    label="Reference No"
                    placeholder="1234"
                    type="text"
                    errorMessage="Invalid reference no"
                    validate={{ required: { value: true } }}
                  />

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

                  <FormGroup>
                    <Label>Select Product</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Oppo F1s</option>
                        <option>Dell Lattiude</option>
                        <option>Sony Ex</option>
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
                  <FormGroup>
                    <Label>Additional Note</Label>
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
