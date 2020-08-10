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
          label: "Reference No",
          field: "ref_no",
          sort: "asc",
          width: 50,
        },
        {
          label: "Adjustment Type",
          field: "type",
          sort: "asc",
          width: 100,
        },
        {
          label: "Shop",
          field: "shop",
          sort: "asc",
          width: 100,
        },
        {
          label: "Product",
          field: "product",
          sort: "asc",
          width: 50,
        },
        {
          label: "Quantity",
          field: "quantity",
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
          ref_no: "PO2018/0002",
          type: "Stock In",
          shop: "New Shop",
          product: "Oppo",
          quantity: "500",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>
            </span>
          ),
        },
        {
          ref_no: "PO2018/0002",
          type: "Stock Out",
          shop: "Old Shop",
          product: "Sony",
          quantity: "400",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>
            </span>
          ),
        },
        {
          ref_no: "PO2018/0002",
          type: "Damage",
          shop: "Awesome Shop",
          product: "HP",
          quantity: "900",
          action: (
            <span>
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-eye"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-pencil"
              ></i>
              &nbsp;
              <i
                style={{ fontSize: 20 + "px", cursor: "pointer" }}
                className="mdi mdi-delete"
              ></i>
            </span>
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
                  <h4 className="card-title">All Adjustment</h4>

                  <Link
                    type="button"
                    to="add-adjustment"
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
