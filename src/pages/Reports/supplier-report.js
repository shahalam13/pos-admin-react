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
          label: "Name",
          field: "name",
          sort: "asc",
          width: 100,
        },
        {
          label: "Totla Purchase",
          field: "total_purchase",
          sort: "asc",
          width: 100,
        },
        {
          label: "Purchase Return",
          field: "purchase_reutrn",
          sort: "asc",
          width: 50,
        },
        {
          label: "Due",
          field: "due",
          sort: "asc",
          width: 50,
        },
        {
          label: "Balance",
          field: "balance",
          sort: "asc",
          width: 50,
        },
      ],
      rows: [
        {
          name: "Jhon",
          total_purchase: "50,000",
          purchase_reutrn: "13,500",
          due: "2000",
          balance: "00",
        },
        {
          name: "Robin",
          total_purchase: "40,000",
          purchase_reutrn: "1,500",
          due: "00",
          balance: "1000",
        },
        {
          name: "Jacson",
          total_purchase: "30,000",
          purchase_reutrn: "15,500",
          due: "500",
          balance: "00",
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
                  <h4 className="card-title">Supplier Report</h4>
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
