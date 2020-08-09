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

class ProductList extends Component {
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
          label: "Date",
          field: "date",
          sort: "asc",
          width: 100,
        },
        {
          label: "Reference No",
          field: "ref_no",
          sort: "asc",
          width: 50,
        },
        {
          label: "Customer",
          field: "customer",
          sort: "asc",
          width: 100,
        },
        {
          label: "Status",
          field: "status",
          sort: "asc",
          width: 100,
        },
        {
          label: "Payment Status",
          field: "p_status",
          sort: "asc",
          width: 50,
        },
        {
          label: "Total",
          field: "total",
          sort: "asc",
          width: 50,
        },
        {
          label: "Payment due",
          field: "due",
          sort: "asc",
          width: 50,
        },
        {
          label: "Action",
          field: "action",
          sort: "asc",
          width: 50,
        },
      ],
      rows: [
        {
          date: "08/04/2020 09:00",
          ref_no: "PO2018/0002",
          customer: "Mahmud",
          status: "Received",
          p_status: "Paid",
          total: "13,500",
          due: "150",
          action: (
            <i
              style={{ fontSize: 20 + "px", cursor: "pointer" }}
              className="mdi mdi-delete"
            ></i>
          ),
        },
        {
          date: "08/06/2020 09:00",
          ref_no: "35001BCVX",
          customer: "Mahmud",
          status: "Pending",
          p_status: "Due",
          total: "13,500",
          due: "123",
          action: (
            <i
              style={{ fontSize: 20 + "px", cursor: "pointer" }}
              className="mdi mdi-delete"
            ></i>
          ),
        },
        {
          date: "08/07/2020 09:00",
          ref_no: "35001BCVD",
          customer: "Mahmud",
          status: "Received",
          p_status: "Partial",
          total: "13,500",
          due: "11,600",
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
                  <h4 className="card-title">All Sales</h4>

                  <Link
                    type="button"
                    to="add-purchase"
                    className="waves-effect waves-light btn btn-primary"
                  >
                    Add
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

export default connect(null, { setBreadcrumbItems })(ProductList);
