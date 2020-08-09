import React, { Component } from "react";
import { Col, Row, Card, CardBody } from "reactstrap";

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

// import { Link, withRouter } from "react-router-dom";

import { MDBDataTable } from "mdbreact";

import { Link } from "react-router-dom";

//Import datatable css
import "../Tables/datatables.scss";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Bronox", link: "#" },
        { title: "Tables", link: "#" },
        { title: "Data Table", link: "#" },
      ],
    };
  }

  componentDidMount() {
    this.props.setBreadcrumbItems("Dashboard", this.state.breadcrumbItems);
  }

  render() {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "Email",
          field: "email",
          sort: "asc",
          width: 270,
        },
        {
          label: "Role",
          field: "role",
          sort: "asc",
          width: 150,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 150,
        },
      ],
      rows: [
        {
          name: "Tiger Nixon",
          email: "nixon@gmail.com",
          role: "Admin",
          action: (
            <i
              style={{ fontSize: 20 + "px", cursor: "pointer" }}
              className="mdi mdi-delete"
            ></i>
          ),
        },
        {
          name: "Garrett Winters",
          email: "garrett@gmail.com",
          role: "Cashier",
          action: (
            <i
              style={{ fontSize: 20 + "px", cursor: "pointer" }}
              className="mdi mdi-delete"
            ></i>
          ),
        },
        {
          name: "Ashton Cox",
          email: "ashton@gmail.com",
          role: "Sales Man",
          action: (
            <i
              style={{ fontSize: 20 + "px", cursor: "pointer" }}
              className="mdi mdi-delete"
            ></i>
          ),
        },
      ],
    };
    return (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <h4 className="card-title">All users</h4>

                  <Link
                    type="button"
                    to="add-user"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Add User
                  </Link>
                </div>
                <MDBDataTable responsive bordered striped data={data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(null, { setBreadcrumbItems })(UserList);
