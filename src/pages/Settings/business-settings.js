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
                  <h4 className="card-title">Business Settings</h4>
                </div>

                <AvForm>
                  <AvField
                    name="name"
                    label="Business Name"
                    placeholder="Example Business"
                    type="text"
                    errorMessage="Invalid product name"
                    validate={{ required: { value: true } }}
                  />
                  <AvField
                    name="profit_percent"
                    label="Default Profit Percent"
                    placeholder="17%"
                    type="number"
                    errorMessage="Invalid profit percent"
                    validate={{ required: { value: true } }}
                  />
                  <AvField
                    name="profit_percent"
                    label="Default Sale Discount"
                    placeholder="2%"
                    type="number"
                    errorMessage="Invalid sale percent"
                    validate={{ required: { value: true } }}
                  />

                  <FormGroup>
                    <Label>Financial year start month</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                      </select>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label>Stock Accounting Method</Label>
                    <div>
                      <select className="form-control">
                        <option>Fifo</option>
                        <option>Lifo</option>
                        <option>Avco</option>
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

                  <FormGroup>
                    <Label>Address</Label>
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
