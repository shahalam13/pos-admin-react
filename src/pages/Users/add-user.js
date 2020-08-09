import React, { Component } from "react";
import { Col, Row, Card, CardBody, FormGroup, Label, Button } from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

class AddUser extends Component {
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
                  <h4 className="card-title">Add new user</h4>

                  <Link
                    type="button"
                    to="user-list"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Back to user list
                  </Link>
                </div>

                <AvForm>
                  <AvField
                    name="username"
                    label="Name  "
                    placeholder="Type Something"
                    type="text"
                    errorMessage="Enter Name"
                    validate={{ required: { value: true } }}
                  />

                  <AvField
                    name="email"
                    label="E-Mail  "
                    placeholder="Enter Valid Email"
                    type="email"
                    errorMessage="Invalid Email"
                    validate={{
                      required: { value: true },
                      email: { value: true },
                    }}
                  />

                  {/* <AvField
                    name="role"
                    label="Role  "
                    placeholder="Enter Role Name"
                    type="text"
                    errorMessage="Enter Role"
                    validate={{ required: { value: true } }}
                  /> */}

                  <FormGroup>
                    <Label>Select Role</Label>
                    <div>
                      <select className="form-control">
                        <option>Select</option>
                        <option>Admin</option>
                        <option>Seller</option>
                        <option>Customer</option>
                        <option>Supplier</option>
                      </select>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label>Note</Label>
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

export default connect(null, { setBreadcrumbItems })(AddUser);
